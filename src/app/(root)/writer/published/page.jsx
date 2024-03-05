"use client";

import ListMyNovels from "@/components/writer/ListMyNovels";
import { getMyNovel } from "@/lib/actions/novel.action";
import { useState, useEffect } from "react";

const PublishedPage = () => {
  const [novels, setNovels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyNovel();
        if (response.success) {
          setNovels(response.novels);
        } else {
          console.error(response.message);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch novels:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>{loading ? <p>Loading...</p> : <ListMyNovels novels={novels} />}</div>
  );
};

export default PublishedPage;
