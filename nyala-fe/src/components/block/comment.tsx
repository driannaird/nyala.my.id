import React, { FC } from "react";
import User from "../fragments/user";
import { Comment as CommentType } from "ln/types/comment";

interface CommentProps {
  comment: CommentType;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <div className="py-2 border-b border-border">
      <div className="flex gap-2 items-start">
        <div>
          <User src={comment.User?.image as string} />
        </div>
        <div className="flex flex-col pt-0.5">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm text-neutral">
              {comment.User?.name}
            </span>
            <span className="font-medium text-[10px] text-text-drop">
              @johndoe
            </span>
            <span className="font-medium text-[10px] text-text-drop">•</span>
            <span className="font-medium text-[10px] text-text-drop">
              5 jam yang lalu
            </span>
          </div>
          <p className="text-sm leading-relaxed">{comment.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
