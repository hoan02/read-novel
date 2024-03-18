"use client";

import { createOrUpdateMark } from "@/lib/actions/marked.action";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const SingleChapterPage = ({ params }) => {
  const { novelSlug, chapterNumber } = params;

  const {
    data: chapter,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
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
    return <div>Loading...</div>;
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
    <div className="bg-white shadow-md p-4 rounded-xl flex gap-4">
      <div
        dangerouslySetInnerHTML={{
          __html: chapter.content,
        }}
      />
    </div>
  );
};

export default SingleChapterPage;
