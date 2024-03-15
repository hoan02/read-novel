"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Divider,
  TableRow,
  TableCell,
} from "@mui/material";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";

import newRequest from "@/utils/newRequest";
import TextEditor from "@/components/TextEditor";
import formatTimeAgo from "@/utils/formatTimeAgo";
import { updateChapter } from "@/lib/actions/chapter.action";

const EditChapter = () => {
  const router = useRouter();
  const { novelSlug, chapterNumber } = useParams();
  const [formData, setFormData] = useState({
    _id: "",
    chapterName: "",
    chapterNumber: 0,
    content: "",
  });

  const fetchDataNovel = async () => {
    const res = await newRequest(`writer/${novelSlug}/${chapterNumber}`);
    const chapter = res.data;
    setFormData(chapter);
    return chapter;
  };

  const {
    data: chapter,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${novelSlug}`],
    queryFn: fetchDataNovel,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleQuillChange = (content) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: content,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await updateChapter(formData);
      toast.success("Chương đã cập nhật thành công!");
      router.push(`/writer/${novelSlug}`);
    } catch (error) {
      console.error(error);
      toast.error("Đã xảy ra lỗi khi cập nhật chương!");
    }
  };

  if (isLoading) return <LinearProgress />;
  if (isError) {
    if (error.response?.status === 404) {
      return <div>Novel not found</div>;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <div>
      <form
        className="space-y-4 bg-zinc-700 p-4 rounded-lg"
        onSubmit={handleSubmit}
      >
        <p className="font-bold text-lg">Chỉnh sửa chương</p>
        <Divider />
        <TextField
          name="chapterName"
          label="Tên chương"
          variant="outlined"
          fullWidth
          required
          value={formData.chapterName}
          onChange={handleChange}
        />

        <div>
          <TextEditor value={formData.content} onChange={handleQuillChange} />
        </div>

        <FormControlLabel
          required
          control={<Checkbox />}
          label="Tôi đồng ý với các điều khoản và quy định khi viết chương"
        />
        <div>
          <Button type="submit" variant="contained">
            Tạo chương
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditChapter;
