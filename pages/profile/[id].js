import Link from "next/link";
import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <p>Email address: {this.props.user.email}</p>
        <Link href="/">Go back to index</Link>
      </div>
    );
  }
}

export const getStaticProps = async (context) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await resp.json();

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await resp.json();
  const paths = users.map((user) => ({ params: { id: user.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Profile;
