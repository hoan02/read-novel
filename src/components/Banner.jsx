import Image from "next/image";

const Banner = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 0,
        left: "0px",
        overflow: "hidden",
        width: "100%",
        height: "360px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0px",
        backgroundSize: "cover",
      }}
    >
      <Image src="/banner.webp" alt="banner" layout="fill" />
    </div>
  );
};

export default Banner;
