import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";
import Link from "next/link";
import { FaSortAmountDownAlt, FaSortAmountDown } from "react-icons/fa";
import formatTimeAgo from "@/utils/formatTimeAgo";

const MenuChapter = () => {
  const { novelSlug } = useParams();
  const [ascending, setAscending] = useState(true);

  const {
    data: chapters,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`chapter-${novelSlug}`],
    queryFn: () =>
      fetch(`/api/novels/${novelSlug}/list-chapter`).then((res) => res.json()),
  });

  const sortedChapters = ascending ? chapters : chapters.slice().reverse();

  const handleSortToggle = () => {
    setAscending((prevAscending) => !prevAscending);
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

  return (
    <div className="p-4 font-source-sans-pro">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold">Danh sách chương</p>
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={handleSortToggle}
        >
          {ascending ? (
            <FaSortAmountDownAlt size={30} />
          ) : (
            <FaSortAmountDown size={30} />
          )}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4">
        {sortedChapters?.map((chapter) => {
          return (
            <Link
              key={chapter._id}
              href={`/truyen/${novelSlug}/${chapter.chapterNumber}`}
              className="text-sm text-gray-00 flex justify-between hover:text-green-600 border-b border-dotted"
            >
              <p>{`Chương ${chapter.chapterNumber}: ${chapter.chapterName}`}</p>
              <p>({formatTimeAgo(chapter.createdAt)})</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuChapter;
