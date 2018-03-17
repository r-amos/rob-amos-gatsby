import React from "react";
import { css } from "emotion";

const PostSubTitle = css`
  color: #22313F;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  font-size: 3rem;
`;

export default ({ text }) => {
  return <h2 className={PostSubTitle}>{text}</h2>;
};
