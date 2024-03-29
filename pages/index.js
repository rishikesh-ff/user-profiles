import styles from "../styles/Home.module.css";
import React from "react";
import UserList from "../components/UserList";
import Button from "../components/Button";
import axios from "axios";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <h1 className={styles.title}>Index of Users</h1>
        <UserList users={this.props.users} />
        <Button text="Create" url="/create" />
      </div>
    );
  }
}

export const getServerSideProps = async () => {
  const resp = await axios.get(process.env.url);
  const users = resp.data;
  return {
    props: {
      users,
    },
  };
};

export default Home;
