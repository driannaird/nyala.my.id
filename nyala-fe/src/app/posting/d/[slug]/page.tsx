import Comment from "ln/components/block/comment";
import CommentInput from "ln/components/block/comment-input";
import Post from "ln/components/block/post";
import HeaderPost from "ln/components/sections/header-post";

export default function DetailPost() {
  return (
    <>
      <HeaderPost withButton={false} />
      <div className="px-4 mb-[72px]">
        <Post isDetail={true} />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <CommentInput />
    </>
  );
}
