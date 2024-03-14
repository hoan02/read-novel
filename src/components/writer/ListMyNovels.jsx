"use client";

import React, { useState, useMemo } from "react";
import { Box, TextField } from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import formatTimeAgo from "@/utils/formatTimeAgo";
import Link from "next/link";
import {
  RiAddLine,
  RiBookLine,
  RiEditLine,
  RiBarChart2Line,
  RiContactsLine,
} from "react-icons/ri";

const links = [
  { href: "/them-chuong", title: "Thêm chương", icon: RiAddLine },
  { href: "/", title: "Danh sách chương", icon: RiBookLine },
  { href: "/chinh-sua", title: "Chỉnh sửa truyện", icon: RiEditLine },
  { href: "/thong-ke", title: "Thống kê", icon: RiBarChart2Line },
  { href: "/lien-he", title: "Liên hệ", icon: RiContactsLine },
];

const columns = [
  { field: "stt", headerName: "STT", width: 50 },
  {
    field: "name",
    headerName: "Tên truyện",
    width: 450,
    renderCell: (params) => (
      <Link
        href={`/truyen/${params.row.slug}`}
        className="hover:text-gray-300"
        target="_blank"
      >
        {params.row.name}
      </Link>
    ),
  },
  { field: "numberOfChapter", headerName: "Số chương", width: 150 },
  { field: "state", headerName: "Trạng thái", width: 150 },
  { field: "createdAt", headerName: "Ngày đăng", width: 150 },
  {
    field: "button",
    headerName: "",
    width: 200,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="ml-5 flex">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`/writer/${params.row.slug}/${link.href}`}
            className="text-orange-600 hover:text-orange-900 ml-2"
            title={link.title}
          >
            <link.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    ),
  },
];

const useFilteredRows = (rows, filterText) => {
  return useMemo(() => {
    return rows.filter((row) =>
      row.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [rows, filterText]);
};

const ListMyNovels = ({ novels }) => {
  const rows = novels.map((novel, index) => ({
    id: novel._id,
    stt: index + 1,
    name: novel.name,
    slug: novel.slug,
    numberOfChapter: novel.numberOfChapter,
    state: novel.state,
    createdAt: formatTimeAgo(novel.createdAt),
  }));
  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredRows = useFilteredRows(rows, filterText);
  return (
    <div className=" mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách truyện</h1>
      <Box sx={{ height: 400, width: "100%" }}>
        <TextField
          label="Tìm kiếm theo tên truyện"
          variant="outlined"
          value={filterText}
          onChange={handleFilterTextChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <DataGrid columns={columns} rows={filteredRows} />
      </Box>
    </div>
  );
};

export default ListMyNovels;
