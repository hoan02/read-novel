import Image from "next/image";
import Link from "next/link";

const Error = ({ message }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl">
      <Image
        className="mx-auto"
        src="/book.png"
        alt="book"
        width={200}
        height={200}
      />
      <p className="text-center text-2xl font-medium my-4">Rất tiếc!</p>
      <p className="text-center">{message}</p>
      <div className="flex my-4">
        <Link
          href="/"
          className=" mx-auto text-sm font-medium text-green-500 hover:text-green-700"
        >
          Trở về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default Error;
