"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { toast } from "react-toastify";

import { novelTypes } from "@/constants";
import { createNovel, updateNovel } from "@/lib/actions/novel.action";
import ImageUpload from "../ImageUpload";

const FormNovel = ({ dataNovel }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(
    dataNovel
      ? {
          novelId: dataNovel._id,
          name: dataNovel.name,
          type: dataNovel.type,
          author: dataNovel.author,
          description: dataNovel.description,
          urlCover: dataNovel.urlCover,
        }
      : {
          name: "",
          type: "",
          author: "",
          description: "",
          urlCover: "",
        }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res;
    try {
      if (dataNovel) {
        res = await updateNovel(formData);
      } else {
        res = await createNovel(formData);
      }
      if (res.success) toast.success(res.message);

      router.push("/writer/published");
    } catch (error) {
      console.error(error);
      toast.error("Đã xảy ra lỗi khi tạo truyện!");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <form
          className="space-y-4 bg-zinc-700 p-4 rounded-lg"
          onSubmit={handleSubmit}
        >
          <p className="font-bold text-lg">
            {dataNovel ? "Chỉnh sửa truyện" : "Thêm truyện mới"}
          </p>
          <TextField
            name="name"
            label="Tên truyện"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
          />
          <FormControl fullWidth required>
            <InputLabel>Thể loại</InputLabel>
            <Select
              name="type"
              label="Thể loại"
              value={formData.type}
              onChange={handleChange}
            >
              {novelTypes?.map((item, index) => (
                <MenuItem key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="author"
            label="Tên tác giả"
            variant="outlined"
            fullWidth
            required
            value={formData.author}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Giới thiệu"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            value={formData.description}
            onChange={handleChange}
          />
          <ImageUpload
            value={formData.urlCover}
            onChange={(url) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                urlCover: url,
              }))
            }
            onRemove={() =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                urlCover: "",
              }))
            }
          />

          <FormControlLabel
            required
            control={<Checkbox />}
            label="Tôi đồng ý với các điều khoản và quy định khi đăng truyện"
          />
          <Button type="submit" variant="contained" fullWidth>
            Tạo truyện
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="bg-zinc-700 p-4 rounded-lg text-gray-300">
          <p className="text-lg font-bold">Quy định khi đăng truyện</p>
          <ol className="list-decimal ml-6 mt-4">
            <li>
              Không được phép đăng các truyện liên quan tới chính trị, tôn giáo,
              tình dục, sắc hiệp, dâm hiệp, nói xấu Việt Nam.
            </li>
            <li>
              Chỉ được đăng các truyện do bạn tự sáng tác hoặc bạn có quyền sử
              dụng.
            </li>
            <li>
              Nội dung giới thiệu truyện và nội dung chương truyện trình bày
              phải phân đoạn rõ ràng, nếu viết thành 1 khối dày đặc chữ sẽ bị
              xóa.
            </li>
            <li>
              Không được quảng cáo các trang web, nền tảng, dịch vụ khác dưới
              mọi hình thức.
            </li>
            <li>
              Không được đưa thông tin donate/ủng hộ của các trang web, nền
              tảng, dịch vụ khác dưới mọi hình thức.
            </li>
            <li>
              Ảnh bìa truyện không có các hình ảnh khiêu dâm, kích dục, kích
              động, thù hằn, ám chỉ đến tôn giáo, chính trị, các hoạt động bị
              cấm bởi pháp luật.
            </li>
            <li>
              Tất cả truyện bạn đăng lên Mê Truyện Chữ có bản quyền thuộc về cá
              nhân của bạn, Mê Truyện Chữ không có quyền lợi hay nghĩa vụ đăng
              ký bản quyền hộ bạn. Khi đăng truyện lên hệ thống bạn cho phép Mê
              Truyện Chữ và các website thuộc hệ thống quyền khai thác quảng cáo
              và quyền thu hộ trả phí (mở khóa) các chương truyện trên các
              truyện bạn đã đăng.
            </li>
          </ol>
          <p className="italic text-sm mt-6">
            Cập nhật lần cuối ngày 05/01/2024
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default FormNovel;
