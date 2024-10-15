import HeaderCategory from "ln/components/block/header-category";
import PostList from "ln/components/template/post-list";
import { getPosts } from "ln/services/post";

const INITIAL_NUMBER_OF_POSTS = 3;

export default async function App() {
  const initialPosts = await getPosts(0, INITIAL_NUMBER_OF_POSTS);

  return (
    <>
      <HeaderCategory />
      <div className="mb-[58px] px-4 max-w-2xl mx-auto">
        <PostList initialPosts={initialPosts} />
      </div>
    </>
  );
}
