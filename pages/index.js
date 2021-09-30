import styles from "../styles/Home.module.css";
import React from "react";
import UserList from "../components/UserList";
import Button from "../components/Button";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <h1 className={styles.title}>Index of Users</h1>
        <UserList users={this.props.users} />
        <Button text="Create" />
      </div>
    );
  }
}

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await resp.json();
  return {
    props: {
      users,
    },
  };
};

export default Home;
