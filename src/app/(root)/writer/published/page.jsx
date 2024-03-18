"use client";

import { useQuery } from "@tanstack/react-query";
import ListMyNovels from "@/components/writer/ListMyNovels";

import LinearProgress from "@mui/material/LinearProgress";

const PublishedPage = () => {
  const fetchDataNovels = async () => {
    try {
      const res = await fetch(`/api/writer`);
      return res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const {
    data: novels,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["novels"],
    queryFn: fetchDataNovels,
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) return <div>Error fetching data</div>;


  return <ListMyNovels novels={novels} />;
};

export default PublishedPage;
