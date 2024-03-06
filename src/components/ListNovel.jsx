"use client";

import Link from "next/link";
import Chip from "@mui/material/Chip";
import { FaUserEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";

import newRequest from "@/utils/newRequest";

const ListNovel = () => {
  const fetchDataNovels = async () => {
    try {
      const res = await newRequest(`novels`);
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const {
    data: novels,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["novels"],
    queryFn: fetchDataNovels,
  });

  if (isLoading) {
    return (
      <div>
        <h2 className="mb-4 text-lg font-semibold">Biên tập viên đề cử</h2>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-100 p-4 rounded"
            >
              <Skeleton variant="rectangular" width={96} height={128} />
              <div className="ml-4">
                <Skeleton width={300} height={25} />
                <Skeleton width={300} height={25} />
                <Skeleton width={200} height={25} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Biên tập viên đề cử</h2>
      <div className="grid grid-cols-2 gap-4">
        {novels &&
          novels.map((novel, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-100 p-4 rounded"
            >
              <Image
                src={novel.urlCover}
                alt={novel.name}
                width={96}
                height={128}
                className="object-cover"
              />
              <div className="ml-4">
                <Link
                  href={`/truyen/${novel.slug}`}
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
