import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

import github from "../img/github.svg";
import codepen from "../img/codepen.svg";
import linkedin from "../img/linkedin.svg";

const title = css`
  font-size: 6rem;
  margin: 0 auto;
  width: 75%;
  text-align: center;
  letter-spacing: 1.5rem;
  margin-top: 15%;
  color: white;
  text-shadow: -6px 6px 10px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;

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

const linkBar = css`
  display: flex;
  justify-content: space-between;
  width: 10%;
  margin: 5rem auto 0 auto;
  img {
    fill: white;
  }
`;

export default () => {
  return (
    <div>
      <div className={title}>
        <h1>
          Rob Amos<span>Web Developer</span>
        </h1>
      </div>
      <div className={linkBar}>
        <img height="24" width="24" src={github} />
        <img height="24" width="24" src={codepen} />
        <img height="24" width="24" src={linkedin} />
      </div>
    </div>
  );
};
