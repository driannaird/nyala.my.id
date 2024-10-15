"use client";

import React, { FormEvent, useState } from "react";
import User from "../fragments/user";
import { Icons } from "../fragments/icons";
import IconButton from "./icon-button";
import { createPostsComments } from "ln/services/comment";
import { useSession } from "next-auth/react";

const CommentInput = ({
  postId,
  onNewComment,
}: {
  postId: string;
  onNewComment: () => void;
}) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const { data } = useSession();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await createPostsComments(text, postId);
      setText("");
      setLoading(false);
      onNewComment(); // Trigger to refetch comments
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="h-[72px] fixed bottom-0 bg-white w-full px-4 py-[10px] border-t border-border max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between gap-2 items-center">
          <div>
            <User src={data?.user?.image as string} />
          </div>
          <input
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="w-full placeholder-text-drop focus:outline-none text-sm py-3"
            placeholder="Komentar"
          />
          <div>
            <IconButton
              disabled={loading}
              type="submit"
              className="border border-border">
              {loading ? (
                <Icons.loading className="animate-spin" strokeWidth={1.25} />
              ) : (
                <Icons.updot strokeWidth={1.25} />
              )}
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentInput;
