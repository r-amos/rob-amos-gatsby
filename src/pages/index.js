import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

const title = css`
  font-size: 6rem;
  margin: 0 auto;
  width: 75%;
  text-align: center;
  letter-spacing: 1.5rem;
  margin-top: 15%;
  color: white;
  text-shadow: -6px 6px 10px rgba(0, 0, 0, 0.5);

  span {
    margin-top: 3rem;
    display: block;
    font-size: 2.5rem;
    letter-spacing: 1.5rem;
    text-shadow: -3px 3px 10px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    font-family: "Roboto";
  }
`;

export default () => {
  return (
    <div className={title}>
      <h1>
        Rob Amos<span>Web Developer</span>
      </h1>
    </div>
  );
};
