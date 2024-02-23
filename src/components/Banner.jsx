import Image from "next/image";
import styles from "@/styles/banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image src="/banner.webp" alt="banner" layout="fill" />
    </div>
  );
};

export default Banner;
