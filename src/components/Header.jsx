import Link from "next/link";
import Image from "next/image";
import { auth, SignOutButton } from "@clerk/nextjs";

import { FaBell } from "react-icons/fa";
import { GrUploadOption } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { BiSolidCabinet } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";

import styles from "@/styles/header.module.css";

const Header = () => {
  const { sessionClaims } = auth();
  const fullName = sessionClaims?.fullName;
  const avatar = sessionClaims?.avatar;
  const isAdmin = sessionClaims?.role === "org:admin";
  // const isWriter = sessionClaims?.role === "org:writer";

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={68} height={68} />
          </Link>
          <div className={styles.leftContent}>
            <div className={styles.types}>
              <div className={styles.txtTypes}>Thể loại</div>
              <div className={styles.typeMenu}>
                <div className={styles.column}>
                  <div className={styles.item}>Tất cả</div>
                  <div className={styles.item}>Kiếm hiệp</div>
                  <div className={styles.item}>Huyền Huyễn</div>
                  <div className={styles.item}>Võng Du</div>
                  <div className={styles.item}>Đồng Nhân</div>
                  <div className={styles.item}>Cạnh Kỹ</div>
                </div>
                <div className={styles.column}>
                  <div className={styles.item}>Tiên Hiệp</div>
                  <div className={styles.item}>Kỳ Ảo</div>
                  <div className={styles.item}>Khoa Huyễn</div>
                  <div className={styles.item}>Đô thị</div>
                  <div className={styles.item}>Đã sử</div>
                  <div className={styles.item}>Huyền Nghi</div>
                </div>
              </div>
            </div>

            <div className={styles.rank}>
              <div className={styles.txtRank}>Bảng xếp hạng</div>
              <div className={styles.rankMenu}>
                <div className={styles.item}>Thịnh hành</div>
                <div className={styles.item}>Đề cử</div>
                <div className={styles.item}>Đọc nhiều</div>
                <div className={styles.item}>Yêu thích</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.search}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Tìm kiếm truyện..."
          />
          <Image src="/search.png" alt="icon search" width={24} height={24} />
        </div>

        <div className={styles.right}>
          <div className={styles.postNovel}>
            <GrUploadOption size={24} />
            <Link href="/writer/create" className={styles.textPostNovel}>
              Đăng truyện
            </Link>
          </div>
          {sessionClaims && (
            <div className={styles.notification}>
              <FaBell size={24} />
              <div className={styles.notificationCount}>1</div>
            </div>
          )}
          <div className={styles.auth}>
            {!sessionClaims ? (
              <>
                <Link href="sign-in">Đăng nhập</Link>
                <span></span>
                <Link href="sign-up">Đăng ký</Link>
              </>
            ) : (
              <div className={styles.account}>
                <div className={styles.username}>{fullName}</div>
                <div className={styles.avatar}>
                  <Image src={avatar} alt="icon login" width={36} height={36} />
                </div>
                <div className={styles.menuAccount}>
                  <div className={styles.item}>
                    <ImProfile size={24} />
                    <Link href="profile">Hồ sơ</Link>
                  </div>
                  <div className={styles.item}>
                    <BiSolidCabinet size={24} />
                    <Link href="novel-shelf">Tủ truyện</Link>
                  </div>
                  {isAdmin && (
                    <div className={styles.item}>
                      <RiAdminLine size={24} />
                      <Link href="admin">Quản lý</Link>
                    </div>
                  )}
                  <div className={styles.item}>
                    <IoMdSettings size={24} />
                    <Link href="setting">Cài đặt</Link>
                  </div>
                  <SignOutButton className={styles.logout}>
                    <span>
                      <RiLogoutBoxRLine size={24} />
                      Đăng xuất
                    </span>
                  </SignOutButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
