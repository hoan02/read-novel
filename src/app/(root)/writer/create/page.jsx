"use client"

import { useState } from "react";
import { Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";

const CreateNovel = () => {
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
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Tạo truyện
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>Điều Khoản Dịch Vụ</Typography>
        <Typography variant="body1">
          Khi tham gia sử dụng dịch vụ cung cấp bởi Mê Truyện Chữ, bạn phải đồng ý và tuân thủ các quy định sau...
          [Nội dung điều khoản dịch vụ ở đây]
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CreateNovel;
