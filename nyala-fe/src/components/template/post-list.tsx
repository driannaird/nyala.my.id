"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getPosts } from "ln/services/post";
import Post from "../block/post";
import { Post as PostType } from "ln/types/post";
import { useSession } from "next-auth/react";

type PostListProps = {
  initialPosts: PostType[];
};

const NUMBER_OF_POSTS_TO_FETCH = 3;

export default function PostList({ initialPosts }: PostListProps) {
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const [posts, setPosts] = useState<PostType[]>(initialPosts);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const { ref, inView } = useInView();
  const { status } = useSession();

  useEffect(() => {
    const loadMorePosts = async () => {
      const apiPosts = await getPosts(offset, NUMBER_OF_POSTS_TO_FETCH);

      if (apiPosts.length === 0) {
        setHasMorePosts(false);
      } else {
        setPosts((posts) => [...posts, ...apiPosts]);
        setOffset((offset) => offset + NUMBER_OF_POSTS_TO_FETCH);
      }
    };

    if (inView && hasMorePosts) {
      loadMorePosts();
    }
  }, [hasMorePosts, inView, offset]);

  return (
    <>
      {status === "loading" ? (
        <h1>Skelaton loading</h1>
      ) : (
        <>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      )}
      {hasMorePosts ? (
        <div ref={ref}>Loading...</div>
      ) : (
        <h1 className="text-center">Anda sudah mencapai batas bawah</h1>
      )}
    </>
  );
}
