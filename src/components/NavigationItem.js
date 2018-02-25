import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

const NavigationItem = css`
  font-size: 2rem;
  color: white;
  letter-spacing: 0.5rem;
  text-shadow: -1px 1px 5px rgba(0, 0, 0, 0.8);
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
