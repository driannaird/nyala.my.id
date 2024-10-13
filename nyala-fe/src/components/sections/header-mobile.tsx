import React from "react";
import Logo from "../fragments/logo";
import User from "../fragments/user";
import IconButton from "../block/icon-button";
import { Icons } from "../fragments/icons";

const HeaderMobile = () => {
  return (
    <div className="sticky z-50 top-0 bg-white flex justify-between px-4 items-center h-[58px] border-b border-border">
      <Logo className="w-24 h-auto" />

      <div className="flex gap-4 items-center">
        <IconButton>
          <Icons.settings strokeWidth={1.25} />
        </IconButton>
        <User src="/user.png" />
      </div>
    </div>
  );
};

export default HeaderMobile;
