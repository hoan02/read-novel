"use client";

import { useState } from "react";
import {
  RiAddLine,
  RiBookLine,
  RiEditLine,
  RiBarChart2Line,
  RiContactsLine,
} from "react-icons/ri";

const novelsData = [
  {
    id: 1,
    name: "Truyện A",
    publishDate: "20/02/2023",
  },
  {
    id: 2,
    name: "Truyện B",
    publishDate: "10/05/2022",
  },
  {
    id: 3,
    name: "Truyện C",
    publishDate: "15/11/2021",
  },
  {
    id: 4,
    name: "Truyện D",
    publishDate: "05/08/2020",
  },
];

const ListMyNovels = () => {
  const [novels] = useState(novelsData);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách truyện của tôi</h1>
      <ul className="divide-y divide-gray-200">
        {novels.map((novel, index) => (
          <li key={novel.id}>
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium  truncate">
                  {index + 1}
                </div>
                <div className="text-lg font-medium text-gray-100 truncate">
                  {novel.name}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <RiBookLine className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                  <p className="truncate">{novel.publishDate}</p>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
                <button
                  className="text-orange-600 hover:text-orange-900"
                  title="Thêm chương"
                >
                  <RiAddLine className="h-5 w-5" />
                </button>
                <button
                  className="text-orange-600 hover:text-orange-900 ml-2"
                  title="Danh sách chương"
                >
                  <RiBookLine className="h-5 w-5" />
                </button>
                <button
                  className="text-orange-600 hover:text-orange-900 ml-2"
                  title="Chỉnh sửa truyện"
                >
                  <RiEditLine className="h-5 w-5" />
                </button>
                <button
                  className="text-orange-600 hover:text-orange-900 ml-2"
                  title="Thống kê"
                >
                  <RiBarChart2Line className="h-5 w-5" />
                </button>
                <button
                  className="text-orange-600 hover:text-orange-900 ml-2"
                  title="Liên hệ"
                >
                  <RiContactsLine className="h-5 w-5" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMyNovels;
