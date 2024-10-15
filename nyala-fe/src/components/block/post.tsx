/* eslint-disable @typescript-eslint/no-explicit-any */
import User from "../fragments/user";
import ActionPost from "./action-post";
import { FC } from "react";
import MediaPost from "./media-post";
import Link from "next/link";
import { Post as PostType } from "ln/types/post";

interface PostProps {
  post: PostType;
  isDetail?: boolean;
}

const Post: FC<PostProps> = ({ post, isDetail = false }) => {
  return (
    <div className="flex flex-col gap-[14px] py-[14px] border-b border-border">
      <div className="flex flex-col gap-2">
        {/* Head post */}
        <div className="flex gap-2 items-center">
          <User src={post.User.image === null ? "-" : post.User.image} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm text-neutral">
                {post?.User?.name}
              </span>
              <span className="font-medium text-[10px] text-text-drop">
                @johndoe
              </span>
              <span className="font-medium text-[10px] text-text-drop">•</span>
              <span className="font-medium text-[10px] text-text-drop">
                5 jam yang lalu
              </span>
            </div>
            <p className="text-[10px] text-neutral">
              {post?.lat} - {post?.lng}
            </p>
          </div>
        </div>

        {/* Text post */}
        <div>
          {isDetail ? (
            <p className="text-sm leading-relaxed">{post?.description}</p>
          ) : (
            <>
              <p className="text-sm leading-relaxed truncate whitespace-nowrap overflow-hidden text-ellipsis">
                {post?.description}
              </p>
              <Link
                href={`/posting/d/${post?.id}`}
                className="text-sm font-semibold leading-relaxed">
                Lihat Detail
              </Link>
            </>
          )}
        </div>

        {/* Image Post */}
        <div className="">
          <MediaPost images={post?.postMedia} />
        </div>
      </div>

      {/* Action Post */}
      <ActionPost post={post} />
    </div>
  );
};

export default Post;
