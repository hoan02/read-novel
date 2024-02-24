import { ImProfile } from "react-icons/im";
import { BiSolidCabinet } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

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
  { icon: <ImProfile size={24} />, name: "Hồ sơ", slug: "profile" },
  {
    icon: <BiSolidCabinet size={24} />,
    name: "Tủ truyện",
    slug: "novel-shelf",
  },
  { icon: <IoMdSettings size={24} />, name: "Cài đặt", slug: "setting" },
];

