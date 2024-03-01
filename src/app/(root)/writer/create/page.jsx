"use client";

import { useState } from "react";
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

const CreateNovel = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [novelName, setNovelName] = useState("");
  const [genre, setGenre] = useState("");
  const [introduction, setIntroduction] = useState("");

  const handleNovelNameChange = (e) => {
    setNovelName(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tên truyện:", novelName);
    console.log("Thể loại:", genre);
    console.log("Giới thiệu:", introduction);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-zinc-700 p-4 rounded-lg"
        >
          <TextField
            id="novelName"
            label="Tên truyện"
            variant="outlined"
            fullWidth
            value={novelName}
            onChange={handleNovelNameChange}
            required
          />
          <FormControl fullWidth required>
            <InputLabel id="genre-label">Thể loại</InputLabel>
            <Select
              labelId="genre-label"
              id="genre"
              value={genre}
              onChange={handleGenreChange}
              label="Thể loại"
            >
              <MenuItem value="Hanhdong">Hành động</MenuItem>
              <MenuItem value="Phieuluu">Phiêu lưu</MenuItem>
              <MenuItem value="Kinhdi">Kinh dị</MenuItem>
              <MenuItem value="Tinhcam">Tình cảm</MenuItem>
              <MenuItem value="Haihuoc">Hài hước</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="novelName"
            label="Tên tác giả"
            variant="outlined"
            fullWidth
            value={novelName}
            onChange={handleNovelNameChange}
            required
          />
          <TextField
            id="introduction"
            label="Giới thiệu"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={introduction}
            onChange={handleIntroductionChange}
            required
          />
          <FormControlLabel
            required
            control={
              <Checkbox
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
              />
            }
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
          <p class="italic text-sm mt-6">Cập nhật lần cuối ngày 05/01/2024</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default CreateNovel;
