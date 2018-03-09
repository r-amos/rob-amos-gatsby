import React from "react";
import { css } from "emotion";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

const About = css`
  font-size: 2rem;
  color: #22313F;
  background-color: #ecf0f1;
  padding: 4rem 6rem;
  margin-bottom: 3rem;
  width: 60%;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
`;

const underline = css`
    height: 1rem;
    width: 10rem;
    margin: 0 auto 5rem auto;
    border: 0;
    height: 0px;
    border-top: 5px solid #fff;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
  }`;

const img = css`
  float: left;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  shape-outside: circle(50% at 50% 50%);
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default () => {
  return (
    <div>
      <PageTitle text={"About"} />
      <hr className={underline} />
      <div className={About}>
        <h2
          className={css`
            margin-bottom: 3rem;
            font-size: 3rem;
            letter-spacing: 0.35rem;
          `}
        >
          A little bit about me.
        </h2>
        <div
          className={css`
            margin-bottom: 1rem;
          `}
        >
          <p
            className={css`
              font-size: 1.5rem;
              letter-spacing: 0.05rem;
              font-family: Roboto;
              margin-bottom: 1rem;
            `}
          >
            Spicy jalapeno bacon ipsum dolor amet tri-tip pig quis dolore boudin
            consequat. Duis pork in beef porchetta, ham hock tongue in sirloin
            est prosciutto pork belly pancetta boudin short loin. Pork ball tip
            short loin ground round bresaola. Turducken irure exercitation
            pariatur. Eu et adipisicing drumstick elit burgdoggen, turkey
            deserunt sirloin rump nostrud ut sunt. Consequat cillum
            reprehenderit in. Pastrami irure mollit boudin.{" "}
          </p>

          <p
            className={css`
              font-size: 1.5rem;
              letter-spacing: 0.05rem;
              font-family: Roboto;
              margin-bottom: 2rem;
            `}
          >
            Spicy jalapeno bacon ipsum dolor amet tri-tip pig quis dolore boudin
            consequat. Duis pork in beef porchetta, ham hock tongue in sirloin
            est prosciutto pork belly pancetta boudin short loin. Pork ball tip
            short loin ground round bresaola. Turducken irure exercitation
            pariatur. Eu et adipisicing drumstick elit burgdoggen, turkey
            deserunt sirloin rump nostrud ut sunt. Consequat cillum
            reprehenderit in. Pastrami irure mollit boudin.
          </p>
        </div>
        <Button text="Contact Me" />
      </div>
    </div>
  );
};
