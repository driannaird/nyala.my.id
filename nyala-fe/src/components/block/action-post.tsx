import React from "react";
import CommentButton from "./comment-button";
import Validation from "./validation";
import { Icons } from "../fragments/icons";

const ActionPost = () => {
  return (
    <div className="flex gap-6">
      <Validation />
      <CommentButton />
      <button>
        <Icons.share strokeWidth={1.25} />
      </button>
    </div>
  );
};

export default ActionPost;
