"use client";

import { useQuery } from "@tanstack/react-query";
import ListMyNovels from "@/components/writer/ListMyNovels";
import newRequest from "@/utils/newRequest";
import LinearProgress from "@mui/material/LinearProgress";

const PublishedPage = () => {
  const fetchDataNovels = async () => {
    try {
      const res = await newRequest(`writer`);
      return res.data;
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

  console.log(novels);

  return <ListMyNovels novels={novels} />;
};

export default PublishedPage;
