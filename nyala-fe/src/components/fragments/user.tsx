import Image from "next/image";
import { FC } from "react";

interface UserProps {
  src: string;
}

const User: FC<UserProps> = ({ src }) => {
  return (
    <div className="rounded-full overflow-hidden inline-block w-10 h-10 border border-border">
      <Image src={src} alt="user" width={100} height={100} />
    </div>
  );
};

export default User;
