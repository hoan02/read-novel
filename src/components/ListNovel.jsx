"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import { FaUserEdit } from "react-icons/fa";

const ListNovel = () => {
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    // Tạo dữ liệu ngẫu nhiên cho danh sách tiểu thuyết
    const generateRandomNovels = () => {
      const types = [
        "Kiếm hiệp",
        "Huyền Huyễn",
        "Võng Du",
        "Đồng Nhân",
        "Cạnh Kỹ",
        "Tiên Hiệp",
        "Kỳ Ảo",
        "Khoa Huyễn",
        "Đô thị",
        "Đã sử",
        "Huyền Nghi",
      ];
      const randomNovels = [];
      for (let i = 0; i < 8; i++) {
        const novel = {
          img: `https://source.unsplash.com/200x250/?novel${i + 1}`,
          name: `Tiểu thuyết trước đó kiếm ý trước đó kiếm ý${i + 1}`,
          description:
            "Vạn năm trước đó kiếm ý đệ nhất nhân Sở Kiếm Bạch, bị thất đại tông môn truy sát mà Vạn năm trước đó kiếm ý đệ nhất nhân Sở Kiếm Bạch, bị thất đại tông môn truy sát mà",
          author: `Tác giả ${i + 1}`,
          type: types[Math.floor(Math.random() * types.length)],
        };
        randomNovels.push(novel);
      }
      return randomNovels;
    };

    // Cập nhật state với dữ liệu ngẫu nhiên
    setNovels(generateRandomNovels());
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Biên tập viên đề cử</h2>
      <div className="grid grid-cols-2 gap-4">
        {novels.map((novel, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-100 p-4 rounded"
          >
            <img
              src={novel.img}
              alt={novel.name}
              className="w-24 h-32 object-cover"
            />
            <div className="ml-4">
              <Link
                href="/"
                className="text-base font-semibold hover:text-green-500"
              >
                {novel.name.length > 34
                  ? novel.name.substring(0, 34) + "..."
                  : novel.name}
              </Link>

              <p className="text-sm text-gray-500">
                {novel.description.length > 120
                  ? novel.description.substring(0, 120) + "..."
                  : novel.description}
              </p>
              <div className="mt-2 flex justify-between">
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <FaUserEdit />
                  {novel.author}
                </div>
                <Chip
                  label={novel.type}
                  variant="outlined"
                  size="small"
                  style={{ color: "#8B4513" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNovel;
