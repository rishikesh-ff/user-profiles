import React from "react";
import styles from "../styles/UserItem.module.css";
import Link from "next/link";

class UserItem extends React.Component {
  render() {
    return (
      <Link href={`/profile/${this.props.user._id}`}>
        <a
          className={styles.card}
        >{`${this.props.user.firstName} ${this.props.user.secondName}`}</a>
      </Link>
    );
  }
}

export default UserItem;
