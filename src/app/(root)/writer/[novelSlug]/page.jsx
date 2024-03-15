"use client";

import ListChapterOfNovel from "@/components/writer/ListChapterOfNovel";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";
import newRequest from "@/utils/newRequest";

const ListChapterPage = () => {
  const { novelSlug } = useParams();

  const fetchDataNovelDetails = async () => {
    const res = await newRequest(`writer/${novelSlug}`);
    const novel = res.data;
    return novel;
  };

  const {
    data: novel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${novelSlug}`],
    queryFn: fetchDataNovelDetails,
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
      <ListChapterOfNovel novel={novel} />
    </div>
  );
};

export default ListChapterPage;
