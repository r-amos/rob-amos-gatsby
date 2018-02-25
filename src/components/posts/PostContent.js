import React from "react";
import { css } from "emotion";

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
    font-family: Roboto;
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
