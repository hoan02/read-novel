"use client";

import ListChapterOfNovel from "@/components/writer/ListChapterOfNovel";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";

const ListChapterPage = () => {
  const { novelSlug } = useParams();

  const {
    data: chapters,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${novelSlug}`],
    queryFn: () => fetch(`/api/writer/${novelSlug}/list-chapter`).then((res) => res.json()),
  });

  if (isLoading) return <LinearProgress />;
  if (isError) {
    if (error.response?.status === 404) {
      return <div>List chapter not found</div>;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <div>
      <ListChapterOfNovel chapters={chapters} />
    </div>
  );
};

export default ListChapterPage;
