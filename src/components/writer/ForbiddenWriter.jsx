"use client";

import Image from "next/image";
import Link from "next/link";
import { OrganizationSwitcher } from "@clerk/nextjs";
import Button from "@mui/material/Button";

const ForbiddenWriter = () => {
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
        Chỉ có nhà viết truyện mới có quyền truy cập vào nội dung này!
      </p>
      <p className="text-center">
        Nếu bạn muốn trở thành nhà viết truyện hãy liên hệ với:
        lehoan.dev@gmail.com để được cấp quyền.
      </p>
      <div className="flex gap-2 justify-center my-4 items-center">
        <span>Bạn đã được cấp quyền? Hãy chuyển ngay</span>
        <OrganizationSwitcher />
      </div>

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

export default ForbiddenWriter;
