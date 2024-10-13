import React from "react";
import { Icons } from "../fragments/icons";

const CommentButton = () => {
  return (
    <button className="text-icon flex gap-2 items-center">
      <Icons.comment strokeWidth={1.25} />
      <span>7</span>
    </button>
  );
};

export default CommentButton;
