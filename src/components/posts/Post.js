import React from "react";
import Disqus from 'disqus-react';
import { css } from "emotion";

import PostTitle from "./PostTitle";
import PostSubTitle from "./PostSubTitle";
import PostContent from "./PostContent";
import PostDate from "./PostDate";
import Tags from "../Tags";

const Post = css`
  margin: 0 auto;
  width: 90%;
  max-width: 960px;

  @media (min-width: 768px) {
    width: 70%;
  }

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

const comment = css`

  padding: 6rem 8rem;
  background-color: #F2F1EF;
  margin-bottom: 6rem;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.5);

`

export default ({ title, subtitle, content, date, path, tags }) => {
  const disqusConfig = {
    url: path,
    identifier: path,
    title: title,
  };
  return (
    <div className={Post}>
      <PostTitle text={title} />
      <hr />
      <PostContent content={content}>
      <PostSubTitle text={subtitle} />
        <PostDate date={date} />
        <Tags tags={tags} />
      </PostContent>
      <div className={comment}>
        <Disqus.DiscussionEmbed shortname={'robamos'} config={disqusConfig} />
      </div>
    </div>
  );
};
