import { auth } from "ln/lib/auth";
import User from "../fragments/user";

const UserCard = async () => {
  const session = await auth();
  return (
    <div>
      <User src={session?.user?.image as string} />
    </div>
  );
};

export default UserCard;
