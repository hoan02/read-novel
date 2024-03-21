"use client";

import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@mui/material";

const Test = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl">
      <div className="flex gap-4">
        <Skeleton variant="rectangular" width={300} height={400} />
      </div>
    </div>
  );
};

export default Test;
