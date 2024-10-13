import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Image
      src={"/logo.svg"}
      alt="logo"
      width={200}
      height={200}
      className={className}
    />
  );
};

export default Logo;
