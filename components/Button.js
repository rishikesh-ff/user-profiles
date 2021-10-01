import Link from "next/link";
import React, { Component } from "react";
import styles from "../styles/Button.module.css";

export default class Button extends Component {
  render() {
    return (
      <>
        <Link href={this.props.url}>
          <a className={styles.button}>{this.props.text}</a>
        </Link>
      </>
    );
  }
}
