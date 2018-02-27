import React from "react";
import { css } from "emotion";

const PageTitle = css`
  margin-top: 10rem;
  margin-bottom: 3rem;
  color: white;
  text-align: center;
  letter-spacing: 1rem;
  font-size: 9rem;
  text-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
`;

export default ({ text }) => {
  return <h2 className={PageTitle}>{text}</h2>;
};
