import React from "react";
import { css } from "emotion";

import NavigationItem from "./NavigationItem";

const Navigation = css`
  float: right;
  padding-top: 1rem;

  ul {
    list-style: none;

    li {
      float: left;
      margin: 0 1rem;
    }
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default () => {
  return (
    <nav className={Navigation}>
      <ul>
        <li>
          <NavigationItem name="Home" url="/" />
        </li>
        <li>
          <NavigationItem name="Blog" url="/blog/" />
        </li>
        <li>
          <NavigationItem name="About" url="/about/" />
        </li>
      </ul>
    </nav>
  );
};
