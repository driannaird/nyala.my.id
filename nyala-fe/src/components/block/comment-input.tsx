import React from "react";
import User from "../fragments/user";
import { Icons } from "../fragments/icons";
import IconButton from "./icon-button";

const CommentInput = () => {
  return (
    <div className="h-[72px] fixed bottom-0 bg-white w-full px-4 py-[10px] border-t border-border">
      <div className="flex justify-between gap-2 items-center">
        <div>
          <User src="/user.png" />
        </div>
        <input
          type="text"
          name=""
          className="w-full placeholder-text-drop focus:outline-none text-sm py-3"
          placeholder="Komentar"
          id=""
        />
        <div>
          <IconButton className="border border-border">
            <Icons.updot strokeWidth={1.25} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
