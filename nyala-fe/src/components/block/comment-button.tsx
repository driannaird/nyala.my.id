import React, { FC } from "react";
import { Icons } from "../fragments/icons";
import Link from "next/link";
import { Post } from "ln/types/post";

interface CommentButtonProps {
  post: Post;
}

const CommentButton: FC<CommentButtonProps> = ({ post }) => {
  return (
    <Link
      href={`/posting/d/${post.id}`}
      className="text-icon flex gap-2 items-center">
      <Icons.comment strokeWidth={1.25} />
      {/* <span>{}</span> */}
    </Link>
  );
};

export default CommentButton;
