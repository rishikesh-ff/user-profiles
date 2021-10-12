import React, { Component } from "react";
import Link from "next/link";
import StyledNavLink from "./styled/NavLink.styled";

export default class NavLink extends Component {
  render() {
    return (
      <Link href={this.props.url}>
        <StyledNavLink>&larr; Go back to index</StyledNavLink>
      </Link>
    );
  }
}
