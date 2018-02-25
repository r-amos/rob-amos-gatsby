import React from "react";
import { css } from "emotion";

import PostTitle from "./PostTitle";
import PostContent from "./PostContent";
import PostDate from "./PostDate";

const Post = css`
  margin: 15rem auto;
  width: 70%;

  hr {
    height: 1rem;
    width: 30rem;
    margin: 0 auto 5rem auto;
    border: 0;
    height: 0px;
    border-top: 5px solid #fff;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
  }
`;

export default ({ title, content, date }) => {
  return (
    <div className={Post}>
      <PostTitle text={title} />
      <hr />
      <PostContent content={content}>
        <PostDate date={date} />
      </PostContent>
    </div>
  );
};
