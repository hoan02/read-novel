import { ImProfile } from "react-icons/im";
import { BiSolidCabinet } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

export const novelTypes = [
  { name: "Tất cả", slug: "tat-ca" },
  { name: "Kiếm hiệp", slug: "kiem-hiep" },
  { name: "Huyền Huyễn", slug: "huyen-huyen" },
  { name: "Võng Du", slug: "vong-du" },
  { name: "Đồng Nhân", slug: "dong-nhan" },
  { name: "Cạnh Kỹ", slug: "canh-ky" },
  { name: "Tiên Hiệp", slug: "tien-hiep" },
  { name: "Kỳ Ảo", slug: "ky-ao" },
  { name: "Khoa Huyễn", slug: "khoa-huyen" },
  { name: "Đô thị", slug: "do-thi" },
  { name: "Đã sử", slug: "da-su" },
  { name: "Huyền Nghi", slug: "huyen-nghi" },
];

export const novelRanks = [
  { name: "Thịnh hành", slug: "thinh-hanh" },
  { name: "Đọc nhiều", slug: "doc-nhieu" },
  { name: "Tặng thưởng", slug: "tang-thuong" },
  { name: "Đề cử", slug: "de-cu" },
  { name: "Yêu thích", slug: "yeu-thich" },
  { name: "Thảo luận", slug: "thao-luan" },
];

export const menuAccount = [
  {
    icon: <ImProfile size={24} />,
    name: "Hồ sơ",
    slug: "/tai-khoan/ho-so",
  },
  {
    icon: <BiSolidCabinet size={24} />,
    name: "Tủ truyện",
    slug: "/tai-khoan/tu-truyen",
  },
  {
    icon: <IoMdSettings size={24} />,
    name: "Cài đặt",
    slug: "/tai-khoan/cai-dat",
  },
  {
    icon: <MdOutlinePayments size={24} />,
    name: "Mua kẹo",
    slug: "/tai-khoan/mua-keo",
  },
  {
    icon: <FaBell size={24} />,
    name: "Thông báo",
    slug: "/tai-khoan/thong-bao",
  },
  {
    icon: <MdOutlineSupportAgent size={24} />,
    name: "Trợ giúp & Báo lỗi",
    slug: "/tai-khoan/ho-tro",
  },
];

export const subMenuAccount = menuAccount.slice(0, 4);
