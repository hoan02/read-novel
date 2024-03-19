"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { FaFlag } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import TabsDetailsNovel from "@/components/novel/details/TabsDetailsNovel";
import { PiSunglassesFill } from "react-icons/pi";
import { Button } from "@mui/material";
import { HiOutlineBookmark } from "react-icons/hi";
import Image from "next/image";

const SingleNovelPage = () => {
  const { novelSlug } = useParams();

  const { data: novel, isLoading: novelLoading } = useQuery({
    queryKey: ["novel", `${novelSlug}`],
    queryFn: () => fetch(`/api/novels/${novelSlug}`).then((res) => res.json()),
  });

  const { data: markedData, isLoading: markedLoading } = useQuery({
    queryKey: [`"marked", ${novelSlug}`],
    queryFn: () => fetch(`/api/marked/${novelSlug}`).then((res) => res.json()),
  });

  if (novelLoading || markedLoading) return <div>Loading</div>;

  return (
    <div className="bg-white shadow-md p-4 rounded-xl ">
      <div className="flex gap-4">
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

          <div className="flex gap-6">
            {markedData.chapterNumber === 0 ? (
              <Link href={`/truyen/${novelSlug}/1`}>
                <Button
                  variant="contained"
                  style={{
                    width: "150px",
                    borderRadius: "30px",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                  startIcon={<PiSunglassesFill size={30} />}
                >
                  Đọc truyện
                </Button>
              </Link>
            ) : (
              <Link href={`/truyen/${novelSlug}/${markedData.chapterNumber}`}>
                <Button
                  variant="contained"
                  style={{
                    width: "150px",
                    borderRadius: "30px",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                  startIcon={<PiSunglassesFill size={30} />}
                >
                  Đọc tiếp
                </Button>
              </Link>
            )}
            <Button
              variant="outlined"
              style={{
                width: "150px",
                borderRadius: "30px",
                textTransform: "none",
                fontSize: "16px",
              }}
              startIcon={<HiOutlineBookmark size={24} />}
            >
              Đánh dấu
            </Button>
            <Button
              variant="outlined"
              style={{
                width: "150px",
                borderRadius: "30px",
                textTransform: "none",
                fontSize: "16px",
              }}
              startIcon={
                <Image src="/candy.png" alt="candy" width={24} height={24} />
              }
            >
              Đề cử
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <TabsDetailsNovel novel={novel} />
      </div>
    </div>
  );
};

export default SingleNovelPage;
