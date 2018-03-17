import React from "react";
import { css } from "emotion";
require("prismjs/themes/prism-tomorrow.css");

const PostContent = css`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  color: #22313F;
  background-color: #F2F1EF;
  @media (min-width: 768px) {
    padding: 6rem 8rem;
  }
  padding: 4rem 4rem;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.5);

  p {
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    font-family: Roboto;
    margin: 1rem 0rem;
    text-align: justify;
  }

  .token,
  code {
    font-family: monospace;
  }

  .gatsby-highlight {
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    margin: 3rem auto;
    width: 97%;
    box-shadow: -7.5px 7.5px 20px rgba(0, 0, 0, 0.5);
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
