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
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";

import TextEditor from "@/components/TextEditor";
import formatTimeAgo from "@/utils/formatTimeAgo";
import { createChapter } from "@/lib/actions/chapter.action";

const FormNovel = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { novelSlug } = useParams();
  const [formData, setFormData] = useState({
    novelSlug: "",
    chapterName: "",
    chapterNumber: 0,
    content: "",
    addChapterType: "next",
  });

  const fetchDataNovel = async () => {
    const res = await fetch(`/api/novels/${novelSlug}`);
    const novel = await res.json();
    setFormData({
      ...formData,
      novelSlug: novel.slug,
      chapterNumber: novel.numberOfChapter + 1,
    });
    return novel;
  };

  const {
    data: novel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`novel-${novelSlug}`],
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

  const handleCreateChapter = useMutation({
    mutationFn: (formData) => {
      return createChapter(formData);
    },
    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries([`novel-${novelSlug}`]);
      router.push(`/writer/${novelSlug}/danh-sach-chuong`);
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      handleCreateChapter.mutate(formData);
    } catch (error) {
      console.error(error);
      toast.error("Đã xảy ra lỗi khi tạo chương!");
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
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <div className="space-y-4 bg-zinc-700 p-4 rounded-lg font-source-sans-pro">
          <p className="font-semibold text-xl">
            Hướng dẫn cách thêm chương mới
          </p>
          <Divider />
          <ul className="list-disc ml-6 text-gray-300">
            <li>
              Chương tiếp: Nếu bạn chọn "Chương tiếp" thì hệ thống sẽ tự đánh
              STT chương tiếp theo cho bạn
            </li>
            <li>
              {`Chèn chương: Ví dụ truyện đã đăng 100 chương có STT từ 1 -> 100,
              nếu bạn chọn "Chèn chương" thì các chương sau sẽ tăng STT lên 1`}
            </li>
            <p>{`Ví dụ: Truyện đã có 100 chương, bạn chèn vào chương thứ 50 thì các chương ban đầu từ 50->100 sẽ tăng lên 1 trở thành 51->101`}</p>
          </ul>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className="h-full space-y-4 bg-zinc-700 p-4 rounded-lg">
          <p className="font-bold text-lg">Thông tin truyện</p>
          <Divider />
          <TableRow>
            <TableCell>Tên truyện:</TableCell>
            <TableCell>{novel.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Số chương:</TableCell>
            <TableCell>{novel.numberOfChapter}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Thể loại:</TableCell>
            <TableCell> {novel.type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tác giả:</TableCell>
            <TableCell> {novel.author}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ngày đăng:</TableCell>
            <TableCell>{formatTimeAgo(novel.createdAt)}</TableCell>
          </TableRow>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <form
          className="space-y-4 bg-zinc-700 p-4 rounded-lg"
          onSubmit={handleSubmit}
        >
          <p className="font-bold text-lg">Thêm chương mới</p>
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
          <div className="flex gap-4">
            <FormControl required fullWidth>
              <InputLabel>Cách đánh STT chương</InputLabel>
              <Select
                name="addChapterType"
                label="Cách đánh STT chương"
                value={formData.addChapterType}
                onChange={handleChange}
              >
                <MenuItem value="next">Chương tiếp</MenuItem>
                <MenuItem value="insert">Chèn chương</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="chapterNumber"
              label="STT chương"
              variant="outlined"
              type="number"
              required
              fullWidth
              disabled={formData.addChapterType === "next"}
              value={formData.chapterNumber}
              onChange={handleChange}
              inputProps={{
                min: 1,
                max: formData.chapterNumber,
              }}
            />
          </div>

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
      </Grid>
    </Grid>
  );
};

export default FormNovel;
