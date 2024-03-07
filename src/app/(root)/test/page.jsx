"use client";

import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import Image from "next/image";

const Test = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleUploadSuccess = (result) => {
    toast.success("ok");
    const { event, info } = result;
    if (event === "success") {
      setImageUrl(info.secure_url);
    }
  };
  return (
    <div className="bg-white w-full h-96">
      {/* <ImageCrop /> */}
      <CldUploadWidget
        uploadPreset="covers"
        options={{
          cropping: true,
          croppingAspectRatio: 3 / 4,
        }}
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Chọn ảnh bìa</button>;
        }}
      </CldUploadWidget>
      {imageUrl && (
        <>
          <Image src={imageUrl} alt="Uploaded" width={200} height={200} />
          <p>{imageUrl}</p>
        </>
      )}
    </div>
  );
};

export default Test;
