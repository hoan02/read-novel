"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import newRequest from "@/utils/newRequest";
import { FaStar, FaSave, FaFlag } from "react-icons/fa";
import { IoGlassesOutline } from "react-icons/io5";
import { CldImage } from "next-cloudinary";

const SingleNovelPage = () => {
  const { slug } = useParams();
  const fetchDataNovel = async () => {
    try {
      const res = await newRequest(`novels/${slug}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const {
    data: novel,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`${slug}`],
    queryFn: fetchDataNovel,
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  console.log("Data", novel);

  return (
    <div className="bg-white shadow-md p-4 rounded-xl flex gap-4">
      <div>
        <CldImage src={novel.urlCover} width={200} height={200} />
      </div>
      <div>
        <div className="media-body">
          <div className="d-flex justify-content-start mb-3">
            <h1 className="h3 mr-2">
              <a href={`https://metruyencv.com/truyen/${novel.slug}`}>
                {novel.name}
              </a>
            </h1>
            <a href="javascript:void(0)" className="text-tertiary fz-13 mt-1">
              <small>
                <FaFlag />
              </small>
            </a>
          </div>
          <ul className="list-unstyled mb-4">
            <li className="d-inline-block border border-secondary px-3 py-1 text-secondary rounded-3 mr-2 mb-2">
              <a
                href={`https://metruyencv.com/tac-gia/${novel.authorId}`}
                className="text-secondary"
              >
                {novel.author}
              </a>
            </li>
            <li className="d-inline-block border border-danger px-3 py-1 text-danger rounded-3 mr-2 mb-2">
              Đang ra
            </li>
            <li className="d-inline-block border border-primary px-3 py-1 text-primary rounded-3 mr-2 mb-2">
              <a
                href={`https://metruyencv.com/truyen?genre=${novel.genreId}`}
                className="text-primary"
              >
                {novel.genre}
              </a>
            </li>
            <li className="d-inline-block border border-success px-3 py-1 text-success rounded-3 mr-2 mb-2">
              <a
                href={`https://metruyencv.com/truyen?tag=${novel.tagId}`}
                className="text-success"
              >
                {novel.tag}
              </a>
            </li>
          </ul>
          <ul className="list-unstyled d-flex mb-4">
            <li className="mr-5">
              <div className="font-weight-semibold h4 mb-1">
                {novel.chapters}
              </div>
              <div>Chương</div>
            </li>
            <li className="mr-5">
              <div className="font-weight-semibold h4 mb-1">
                {novel.chaptersPerWeek}
              </div>
              <div>Chương/tuần</div>
            </li>
            <li className="mr-5">
              <div className="font-weight-semibold h4 mb-1">{novel.views}</div>
              <div>Lượt đọc</div>
            </li>
            <li className="mr-5">
              <div className="font-weight-semibold h4 mb-1">
                {novel.bookmarkedValue}
              </div>
              <div>Cất giữ</div>
            </li>
          </ul>
          <div className="d-flex align-items-center mb-4">
            <span className="nh-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
              <span className="active" style={{ width: "100%" }}>
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </span>
            </span>
            <span className="d-inline-block ml-2">
              <span className="font-weight-semibold">{novel.rating}</span>/5
            </span>
            <span className="d-inline-block text-secondary ml-1">
              ({novel.reviews} đánh giá)
            </span>
          </div>
          <ul className="list-unstyled d-flex align-items-center">
            <li id="reading-book" className="mr-3 w-150">
              <a
                href={`https://metruyencv.com/truyen/${novel.slug}/chuong-1`}
                className="cursor-pointer btn btn-primary btn-md btn-block btn-shadow font-weight-semibold d-flex align-items-center justify-content-center"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                <IoGlassesOutline className="mr-2" />
                Đọc truyện{" "}
              </a>
            </li>
            <li id="bookmark" className="mr-3 w-150">
              <span>
                {" "}
                <a
                  href="javascript:void(0);"
                  className="btn btn-outline-secondary btn-md btn-block font-weight-semibold d-flex align-items-center justify-content-center"
                >
                  <FaSave className="mr-2" /> Đánh dấu
                </a>{" "}
              </span>
            </li>
            <li id="suggest-book" className="mr-3 w-150">
              <div>
                <a
                  href="javascript:void(0);"
                  className="btn btn-outline-warning btn-md btn-block bg-yellow-white text-primary font-weight-semibold d-flex align-items-center justify-content-center"
                >
                  <FaFlag className="mr-2" /> Đề cử
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleNovelPage;
