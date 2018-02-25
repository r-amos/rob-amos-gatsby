import React from "react";
import { css } from "emotion";

const PostDate = css`
  margin-bottom: 1rem;
  font-size: 2rem;
  letter-spacing: 0.125rem;
`;

export default ({ date }) => {
  return <div className={PostDate}>{date}</div>;
};
