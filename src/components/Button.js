import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

const Button = css`
  padding: 0.75rem 1rem;
  border-style: none;
  font-size: 2rem;
  letter-spacing: 0.125rem;
  cursor: pointer;
  box-shadow: -2px 3px 8px rgba(0, 0, 0, 0.7);
  background-color: #2a5298;
  color: #fff;
  border: 2px solid #1e3c72;
`;

export default ({ url, text }) => {
  return (
    <Link to={url}>
      <button className={Button}>{text}</button>
    </Link>
  );
};
