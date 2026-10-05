import { Suspense } from "react";
import "./App.css";
import Posts from "./Posts";
// import Batsman from "./Batsman";
// import Users from "./Users";
// import Friends from "./Friends";
// import Counter from "./Counter";
// import Handle from "./Handle";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

//Step01 For using async post
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  // const friendsPromise = fetchFriends();
  //Sept 02 for using async posts
  const postsPromise = fetchPosts();

  return (
    <div className="card">
      <Suspense fallback={<h1>Posts are loading.......</h1>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h2>Users are Loading...</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h2>Friends are comming</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Batsman></Batsman> */}
      {/* <Counter></Counter>
      <Handle></Handle> */}
    </div>
  );
}

export default App;
