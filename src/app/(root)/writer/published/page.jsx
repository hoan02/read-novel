"use client";

import { useQuery } from "@tanstack/react-query";
import ListMyNovels from "@/components/writer/ListMyNovels";

import LinearProgress from "@mui/material/LinearProgress";

const PublishedPage = () => {
  const {
    data: novels,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["novels"],
    queryFn: () => fetch(`/api/writer`).then((res) => res.json()),
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) return <div>Error fetching data</div>;

  return <ListMyNovels novels={novels} />;
};

export default PublishedPage;
