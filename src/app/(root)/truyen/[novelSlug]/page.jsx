"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import newRequest from "@/utils/newRequest";
import { FaStar, FaSave, FaFlag } from "react-icons/fa";
import { IoGlassesOutline } from "react-icons/io5";
import { CldImage } from "next-cloudinary";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import { checkMark } from "@/lib/actions/marked.action";
import { useState } from "react";

const SingleNovelPage = () => {
  const { novelSlug } = useParams();
  const [numberMarked, setNumberMarked] = useState(0);
  const getDataNovel = async () => {
    try {
      const dataNovel = await newRequest(`novels/${novelSlug}`);
      const dataMarked = await newRequest(`marked/${novelSlug}`);
      console.log(dataMarked);
      setNumberMarked(dataMarked.data.chapterNumber);
      return dataNovel.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const {
    data: novel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${novelSlug}`],
    queryFn: getDataNovel,
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) {
    if (error.response?.status === 404) {
      return <div>Novel not found</div>;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <>
      <div className="bg-white shadow-md p-4 rounded-xl flex gap-4">
        <div>
          <CldImage
            alt={novel.name}
            src={novel.urlCover}
            width={300}
            height={400}
          />
        </div>
        <div className="w-full mx-4">
          <div className="flex gap-2 items-center">
            <h1 className="text-2xl font-semibold text-green-800">
              {novel.name}
            </h1>
            <FaFlag />
          </div>
          <div className="flex gap-2 items-center my-6">
            <Chip
              label={novel.type}
              variant="outlined"
              style={{ color: "#0000AA", borderColor: "#0000AA" }}
            />
            <Chip
              label={novel.state}
              variant="outlined"
              style={{ color: "#009900", borderColor: "#009900" }}
            />
            <Chip
              label={novel.author}
              variant="outlined"
              style={{ color: "#990000", borderColor: "#990000" }}
            />
          </div>
          <div className="flex gap-6 my-6">
            <div>
              <p className="font-bold">{novel.numberOfChapter}</p>
              <p>Chương</p>
            </div>

            <div>
              <p className="font-bold">{novel.reads}</p>
              <p>Lượt đọc</p>
            </div>
            <div>
              <p className="font-bold">123</p>
              <p>Đề cử</p>
            </div>
          </div>
          <div className="my-4 flex items-center text-sm">
            <Rating
              precision={0.5}
              defaultValue={novel.rating}
              max={10}
              readOnly
            />
            <span className="ml-4 font-semibold">{novel.rating}/10</span>
            <span className="ml-1">{`(${novel.nominations} đánh giá)`}</span>
          </div>

          <div>
            <button>
              {numberMarked === 0 ? "Đọc truyện" : "Đọc tiếp"} {numberMarked}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNovelPage;
