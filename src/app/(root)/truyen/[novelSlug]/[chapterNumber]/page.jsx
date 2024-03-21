"use client";

import { createOrUpdateMark } from "@/lib/actions/marked.action";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Link from "next/link";

const SingleChapterPage = ({ params }) => {
  const { novelSlug, chapterNumber } = params;

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: [`${novelSlug}${chapterNumber}`],
    queryFn: () =>
      fetch(`/api/novels/${novelSlug}/${chapterNumber}`).then((res) =>
        res.json()
      ),
  });

  const handleMark = async () => {
    await createOrUpdateMark(novelSlug, chapterNumber);
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    if (error.response?.status === 404) {
      return <div>Novel not found</div>;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }

  if (isSuccess) {
    handleMark();
  }

  return (
    <div className="bg-white shadow-md lg:px-16 p-4 rounded-lg">
      <div className="flex justify-between py-2">
        <Link
          href={`/truyen/${novelSlug}/${data.chapter.chapterNumber - 1}`}
          className={`flex items-center py-2 px-4 border-2 rounded-full ${
            data.chapter.chapterNumber === 1
              ? "pointer-events-none opacity-50"
              : "hover:bg-gray-100"
          }`}
        >
          <GrFormPreviousLink />
          Chương trước
        </Link>
        <Link
          href={`/truyen/${novelSlug}/${data.chapter.chapterNumber + 1}`}
          className={`flex items-center py-2 px-4 border-2 rounded-full ${
            data.chapter.chapterNumber == data.totalChapters
              ? "pointer-events-none opacity-50"
              : "hover:bg-gray-100"
          }`}
        >
          Chương sau <GrFormNextLink />
        </Link>
      </div>
      <h1 className="text-3xl py-10 text-center">
        Chương {data.chapter.chapterNumber}: {data.chapter.chapterName}
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.chapter.content,
        }}
      />
    </div>
  );
};

export default SingleChapterPage;
