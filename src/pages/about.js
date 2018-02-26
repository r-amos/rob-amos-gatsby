import React from "react";
import { css } from "emotion";

import PageTitle from "../components/PageTitle";

const About = css`
  font-size: 2rem;
  color: #4e342e;
  background-color: #fff8e1;
  padding: 4rem 6rem;
  margin-bottom: 3rem;
  width: 60%;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
`;

const underline = css`
    height: 1rem;
    width: 30rem;
    margin: 0 auto 5rem auto;
    border: 0;
    height: 0px;
    border-top: 5px solid #fff;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
  }`;

export default () => {
  return (
    <div>
      <PageTitle text={"About"} />
      <hr className={underline} />
      <div className={About}>asf</div>
    </div>
  );
};
