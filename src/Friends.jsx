import { use } from "react";

export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  console.log(friends);
  return (
    <div className="card">
      <h1>Friends: {friends.length} </h1>
    </div>
  );
}
