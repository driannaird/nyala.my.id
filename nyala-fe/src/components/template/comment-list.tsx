/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSession } from "next-auth/react";
import { getPostsComments } from "ln/services/comment";
import { Comment as CommentType } from "ln/types/comment";
import Comment from "../block/comment";

type CommentListProps = {
  initialComments: CommentType[];
  postId: string;
  revalidate: any;
  setRevalidate: any;
};

const INITIAL_NUMBER_OF_COMMENTS = 5;

export default function CommentList({
  initialComments,
  postId,
  revalidate,
  setRevalidate,
}: CommentListProps) {
  const [offset, setOffset] = useState(INITIAL_NUMBER_OF_COMMENTS);
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const { ref, inView } = useInView();
  const { status } = useSession();

  useEffect(() => {
    const loadMoreComments = async () => {
      const apiComments = await getPostsComments(
        offset,
        INITIAL_NUMBER_OF_COMMENTS,
        postId
      );

      if (apiComments.length === 0) {
        setHasMoreComments(false);
      } else {
        setComments((comments) => [...comments, ...apiComments]);
        setOffset((offset) => offset + INITIAL_NUMBER_OF_COMMENTS);
      }
    };

    if (inView && hasMoreComments) {
      loadMoreComments();
    }
  }, [hasMoreComments, inView, offset, postId]);

  useEffect(() => {
    const handleRevalidate = async () => {
      try {
        const updatedComments = await getPostsComments(
          0,
          INITIAL_NUMBER_OF_COMMENTS,
          postId
        );
        setComments(updatedComments); // Update comments with the latest comments
        setRevalidate(false);
      } catch (error) {
        console.log("Error fetching new comments:", error);
      }
    };

    handleRevalidate();
  }, [revalidate]);

  return (
    <>
      {status === "loading" ? (
        <h1>Skelaton loading</h1>
      ) : (
        <>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      )}
      {hasMoreComments ? (
        <div ref={ref}>Loading...</div>
      ) : (
        <h1 className="text-center">Anda sudah mencapai batas bawah</h1>
      )}
    </>
  );
}
