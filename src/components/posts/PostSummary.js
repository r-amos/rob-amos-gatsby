import React from "react";
import { css } from "emotion";

import Button from "../Button";

const PostSummary = css`
  font-size: 2rem;
  color: #4e342e;
  background-color: #fff8e1;
  padding: 4rem 6rem;
  margin-bottom: 3rem;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    box-shadow: -11px 11px 20px rgba(0, 0, 0, 0.5);
    transform: translate(3px, -3px);
  }
`;

const PostTitle = css`
  margin-bottom: 1rem;
  font-size: 3rem;
  letter-spacing: 0.35rem;
`;

const PostDate = css`
  margin-bottom: 2rem;
  letter-spacing: 0.15rem;
`;

const PostExcerpt = css`
  margin-bottom: 1.2rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
  font-family: Roboto;
`;

export default ({ slug, title, date, excerpt }) => {
  return (
    <div className={PostSummary}>
      <h4 className={PostTitle}>{title}</h4>
      <h5 className={PostDate}>{date} | </h5>
      <p className={PostExcerpt}>{excerpt}</p>
      <Button url={slug} text={"Read More"} />
    </div>
  );
};
