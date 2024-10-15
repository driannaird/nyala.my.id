/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Karena kita perlu menggunakan state dan efek

import { useEffect, useState } from "react";
import CommentInput from "ln/components/block/comment-input";
import Post from "ln/components/block/post";
import CommentList from "ln/components/template/comment-list";
import HeaderPostClient from "ln/components/template/header-post-client";
import { getPostsComments } from "ln/services/comment";
import { getPostById } from "ln/services/post";
import { useSession } from "next-auth/react";

const INITIAL_NUMBER_OF_COMMENTS = 5;

export default function DetailPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [revalidate, setRevalidate] = useState<boolean>(false);
  const { status } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPostById(params.slug);
        const initialComments = await getPostsComments(
          0,
          INITIAL_NUMBER_OF_COMMENTS,
          params.slug
        );

        if (postData) {
          setPost(postData);
          setComments(initialComments);
        } else {
          setPost(null); // handle not found case
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (post === null) {
    return <h1>404 Not Found</h1>;
  }

  const handleNewComment = () => {
    setRevalidate(true);
  };

  return (
    <>
      <HeaderPostClient />
      <div className="px-4 mb-[72px] max-w-2xl mx-auto">
        <Post post={post} isDetail={true} />
        <CommentList
          initialComments={comments}
          postId={params.slug}
          revalidate={revalidate}
          setRevalidate={setRevalidate}
        />
      </div>
      {status === "authenticated" && (
        <CommentInput postId={params.slug} onNewComment={handleNewComment} />
      )}
    </>
  );
}
