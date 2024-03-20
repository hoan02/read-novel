"use client";

import { useParams } from "next/navigation";
import FormNovel from "@/components/writer/FormNovel";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";

const UpdateNovelPage = () => {
  const { novelSlug } = useParams();

  const {
    data: novel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${novelSlug}`],
    queryFn: fetch(`/api/novels/${novelSlug}`).then((res) => res.json()),
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
