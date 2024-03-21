"use client";

import { useState, useMemo } from "react";
import { Box, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import formatTimeAgo from "@/utils/formatTimeAgo";
import Link from "next/link";
import { RiEditLine, RiBarChart2Line, RiContactsLine } from "react-icons/ri";

const links = [
  { href: "/chinh-sua", title: "Chỉnh sửa chương", icon: RiEditLine },
  { href: "/thong-ke", title: "Thống kê", icon: RiBarChart2Line },
  { href: "/lien-he", title: "Liên hệ", icon: RiContactsLine },
];

const useFilteredRows = (rows, filterText) => {
  return useMemo(() => {
    return rows.filter((row) =>
      row.chapterName?.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [rows, filterText]);
};

const ListChapterOfNovel = ({ chapters }) => {
  const columns = [
    {
      field: "stt",
      headerName: "STT",
      width: 50,
      renderCell: (params) => <p>{params.row.chapterNumber}</p>,
    },
    {
      field: "chapterName",
      headerName: "Tên chương",
      width: 450,
      renderCell: (params) => (
        <Link
          href={`/truyen/${chapters[0].novelSlug}/${params.row.chapterNumber}`}
          className="hover:text-gray-300"
          target="_blank"
        >
          {params.row.chapterName}
        </Link>
      ),
    },
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
              href={`/writer/${chapters[0].novelSlug}/${params.row.chapterNumber}/${link.href}`}
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

  const rows =
    chapters && Array.isArray(chapters)
      ? chapters.map((chapter, index) => ({
          id: chapter._id,
          stt: index + 1,
          chapterName: chapter.chapterName,
          chapterNumber: chapter.chapterNumber,
          createdAt: formatTimeAgo(chapter.createdAt),
        }))
      : [];

  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredRows = useFilteredRows(rows, filterText);

  return (
    <div className=" mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách chương</h1>
      <Box sx={{ height: 400, width: "100%" }}>
        <TextField
          label="Tìm kiếm theo tên chương"
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

export default ListChapterOfNovel;
