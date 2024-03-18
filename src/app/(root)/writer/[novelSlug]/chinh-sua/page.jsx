"use client";

import { useParams } from "next/navigation";
import FormNovel from "@/components/writer/FormNovel";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";

const UpdateNovelPage = () => {
  const { novelSlug } = useParams();
  const fetchDataNovel = async () => {
    try {
      const res = await fetch(`/api/novels/${novelSlug}`);
      return res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const {
    data: novel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${novelSlug}`],
    queryFn: fetchDataNovel,
  });

  if (isLoading) return <LinearProgress />;
  if (isError) {
    if (error.response?.status === 404) {
      return <div>Novel not found</div>;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <div>
      <FormNovel dataNovel={novel} />
    </div>
  );
};

export default UpdateNovelPage;
