import Link from "next/link";
import React, { Component } from "react";
import StyledButton from "./styled/Button.styled";
export default class Button extends Component {
  render() {
    return (
      <>
        <Link href={this.props.url}>
          <StyledButton>{this.props.text}</StyledButton>
        </Link>
      </>
    );
  }
}
