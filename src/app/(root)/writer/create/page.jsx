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
import { CldImage, CldUploadWidget } from "next-cloudinary";

import { novelTypes } from "@/constants";
import { createNovel } from "@/lib/actions/novel.action";

const CreateNovel = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    author: "",
    description: "",
    urlCover: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUploadSuccess = (result) => {
    toast.success("Tải ảnh lên thành công");
    const { event, info } = result;
    if (event === "success") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        urlCover: info.secure_url,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createNovel(formData);
      toast.success("Truyện đã được tạo thành công!");
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
              {novelTypes.map((item, index) => (
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
          <FormControl required fullWidth>
            {!formData.urlCover ? (
              <CldUploadWidget
                uploadPreset="covers"
                options={{
                  clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
                  cropping: true,
                  croppingAspectRatio: 3 / 4,
                  showSkipCropButton: false,
                }}
                onSuccess={handleUploadSuccess}
              >
                {({ open }) => {
                  return (
                    <Button variant="outlined" onClick={() => open()}>
                      Chọn ảnh bìa
                    </Button>
                  );
                }}
              </CldUploadWidget>
            ) : (
              <CldImage
                alt="cover"
                width="300"
                height="400"
                src={formData.urlCover}
              />
            )}
          </FormControl>

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

export default CreateNovel;
