import React from "react";
import { css } from "emotion";
require("prismjs/themes/prism-okaidia.css");

const PostContent = css`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  color: #4e342e;
  background-color: #fff8e1;
  padding: 6rem 8rem;
  margin-bottom: 3rem;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.5);

  p {
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    font-family: Roboto;
    margin-bottom: 1rem;
    text-align: justify;
  }

  .token,
  code {
    font-family: monospace;
  }

  .gatsby-highlight {
    margin: 3rem auto;
    width: 95%;
  }
`;

export default ({ content, children }) => {
  return (
    <div className={PostContent}>
      {children}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
