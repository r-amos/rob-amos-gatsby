import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

const NavigationItem = css`
  font-size: 2rem;
  color: white;
  letter-spacing: 0.5rem;
  text-decoration: none;
  margin: 1rem 2rem;
  padding-bottom: 0.1rem;
  border-bottom: 0.2rem solid transparent;
  text-transform: uppercase;
  transition: border-bottom 0.5s;
  &:hover {
    border-bottom: 0.2rem solid white;
  }
`;

export default ({ url, name }) => {
  return (
    <Link className={NavigationItem} to={url}>
      {name}
    </Link>
  );
};
