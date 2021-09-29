import React from "react";
import styles from "../styles/UserItem.module.css";
import Link from 'next/link';

class UserItem extends React.Component {
  render() { 
    return (
      <Link href='/profile'>
        <a className={styles.card}>
          {this.props.user.name}
        </a>
      </Link>
    );
  }
}

export default UserItem;