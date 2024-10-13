import React from "react";
import User from "../fragments/user";

const Comment = () => {
  return (
    <div className="py-2 border-b border-border">
      <div className="flex gap-2 items-start">
        <div>
          <User src="/user.png" />
        </div>
        <div className="flex flex-col pt-0.5">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm text-neutral">John Doe</span>
            <span className="font-medium text-[10px] text-text-drop">
              @johndoe
            </span>
            <span className="font-medium text-[10px] text-text-drop">•</span>
            <span className="font-medium text-[10px] text-text-drop">
              5 jam yang lalu
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            soluta! Sit distinctio dolorum earum explicabo fugiat repellendus,
            ea repellat ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
