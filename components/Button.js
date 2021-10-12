import React, { Component } from "react";
import StyledButton from "./styled/Button.styled";
import Link from "next/link";

export default class Button extends Component {
  render() {
    if (this.props.url) {
      return (
        <>
          <Link href={this.props.url}>
            <StyledButton variant="submit">{this.props.text}</StyledButton>
          </Link>
        </>
      );
    }
    return (
      <>
        <StyledButton variant={this.props.variant} onClick={this.props.onClick}>
          {this.props.text}
        </StyledButton>
      </>
    );
  }
}
