import { use } from "react";
import Post from "./post";

export default function Posts({ postsPromise }) {
  const posts = use(postsPromise);
  console.log(posts);

  return (
    <div className="card">
      <h1>All post are here</h1>
      <h1>Post Length: {posts.length}</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
}
