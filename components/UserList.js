import React from "react";
import UserItem from "./UserItem";
import styles from "../styles/Home.module.css";

class UserList extends React.Component {
  render() {
    return (
      <div className={styles.grid}>
        {this.props.users.map((user) => (
          <UserItem key={user._id} user={user} />
        ))}
      </div>
    );
  }
}

export default UserList;
