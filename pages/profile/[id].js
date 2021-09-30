import Link from "next/link";
import React from "react";

class Profile extends React.Component {
  render() { 
    return (
    <div>
      <h1>{this.props.user.name}</h1>
      <p>{this.props.user.email}</p>
      <Link href='/'>Go back to index</Link>
    </div>);
  }
}

export const getServerSideProps = async (context) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
  const user = await resp.json();

  return {
    props: {
      user
    }
  }

}

export default Profile;