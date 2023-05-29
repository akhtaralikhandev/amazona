import Link from "next/link";

const AboutPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div>
      <h1>This is the About page</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Link href={"/"}>Go Back</Link>
    </div>
  );
};

export default AboutPage;
