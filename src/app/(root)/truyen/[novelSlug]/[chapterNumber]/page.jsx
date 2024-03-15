"use client";

import { createOrUpdateMark } from "@/lib/actions/marked.action";
import { useEffect } from "react";

const SingleChapterPage = ({ params }) => {
  const { novelSlug, chapterNumber } = params;

  const handleMark = async () => {
    await createOrUpdateMark(novelSlug, chapterNumber);
  };

  useEffect(() => handleMark, []);

  return (
    <div>
      <h1>Day la ten {novelSlug}</h1>
      <h2>Day la chuong {chapterNumber}</h2>
    </div>
  );
};

export default SingleChapterPage;
