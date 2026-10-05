export default function Friend({ friend }) {
  console.log(friend);
  const { name, email, phone, website } = friend;
  return (
    <div className="card">
      <h1>Name: {name} </h1>
      <h1>Email: {email}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Website: {website}</h1>
    </div>
  );
}
