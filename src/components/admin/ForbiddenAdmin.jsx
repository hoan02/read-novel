"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

const ForbiddenAdmin = () => {
  return (
    <div className="bg-white shadow-md rounded-xl">
      <Image
        className="mx-auto"
        src="/book.png"
        alt="book"
        width={200}
        height={200}
      />
      <p className="text-center text-2xl font-medium my-4">Rất tiếc!</p>
      <p className="text-center">
        Chỉ có nhà Admin có quyền truy cập vào nội dung này!
      </p>
      <div className="flex pb-10">
        <Link
          href="/"
          className="mx-auto text-sm font-medium text-green-500 hover:text-green-700"
        >
          <Button variant="contained">Trở về trang chủ</Button>
        </Link>
      </div>
    </div>
  );
};

export default ForbiddenAdmin;
