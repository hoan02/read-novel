"use client";

import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import Image from "next/image";
import { Skeleton, CircularProgress } from "@mui/material";

const Test = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl">
      <div className="flex gap-4">
        <Skeleton variant="rectangular" width={240} height={320} />
        <div className="space-y-4">
          <Skeleton variant="rounded" width={600} height={30} />
          <Skeleton variant="rounded" width={600} height={30} />
          <Skeleton variant="rounded" width={600} height={30} />
          <CircularProgress />
        </div>
      </div>
    </div>
  );
};

export default Test;
