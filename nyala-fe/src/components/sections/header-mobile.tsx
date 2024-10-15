import React from "react";
import Logo from "../fragments/logo";
import IconButton from "../block/icon-button";
import { Icons } from "../fragments/icons";
import { auth } from "ln/lib/auth";
import UserLogoutModal from "../block/user-logout-modal";
import Link from "next/link";

const HeaderMobile = async () => {
  const session = await auth();

  return (
    <div className="sticky z-50 top-0 bg-white flex justify-between px-4 items-center h-[58px] border-b border-border max-w-2xl mx-auto">
      <Logo className="w-24 h-auto" />

      <div className="flex gap-4 items-center">
        <IconButton>
          <Icons.settings strokeWidth={1.25} />
        </IconButton>

        {session === null || session === undefined ? (
          <Link
            href="/signin"
            className="text-sm bg-primary text-white py-2 px-4 rounded-full">
            Masuk
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral">{session?.user?.name}</span>
            <UserLogoutModal url={session?.user?.image as string} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
