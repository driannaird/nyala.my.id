import User from "../fragments/user";
import ActionPost from "./action-post";
import { FC } from "react";
import MediaPost from "./media-post";

interface PostProps {
  isDetail?: boolean;
}

const Post: FC<PostProps> = ({ isDetail = false }) => {
  return (
    <div className="flex flex-col gap-[14px] py-[14px] border-b border-border">
      <div className="flex flex-col gap-2">
        {/* Head post */}
        <div className="flex gap-2 items-center">
          <User src="/user.png" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm text-neutral">
                John Doe
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
              Jalan maju mundur, Jawa Tengah, Indonesia
            </p>
          </div>
        </div>

        {/* Text post */}
        <div>
          {isDetail ? (
            <p className="text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dum Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident nemo
              vel, fugit obcaecati recusandae sunt. Natus placeat ea magnam
              molestias sit repellat corporis consequatur quod porro,
              exercitationem, dolorum ratione! Nesciunt?
            </p>
          ) : (
            <>
              <p className="text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dum ...
              </p>
              <p className="text-sm font-semibold leading-relaxed">
                Selengkapnya
              </p>
            </>
          )}
        </div>

        {/* Image Post */}
        <div className="">
          <MediaPost />
        </div>
      </div>

      {/* Action Post */}
      <ActionPost />
    </div>
  );
};

export default Post;
