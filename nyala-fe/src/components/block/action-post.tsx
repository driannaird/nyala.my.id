import React, { FC } from "react";
import CommentButton from "./comment-button";
import Validation from "./validation";
import { Icons } from "../fragments/icons";
import { Post } from "ln/types/post";

interface ActionPostProps {
  post: Post;
}

const ActionPost: FC<ActionPostProps> = ({ post }) => {
  return (
    <div className="flex gap-6">
      <Validation post={post} />
      <CommentButton post={post} />
      <button>
        <Icons.share strokeWidth={1.25} />
      </button>
    </div>
  );
};

export default ActionPost;
