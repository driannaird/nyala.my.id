import HeaderCategory from "ln/components/block/header-category";
import Post from "ln/components/block/post";

export default function Home() {
  return (
    <>
      <HeaderCategory />
      <div className="mb-[58px] px-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
