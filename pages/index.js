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
  const resp = await axios.get(
    "https://crudcrud.com/api/9d108ccecb07451a811fbf69af402ad3/users"
  );
  const users = resp.data;
  console.log(users);
  return {
    props: {
      users,
    },
  };
};

export default Home;
