import React from "react";
import { css } from "emotion";
const Logo = css`
  position: fixed;
  top: 1.7rem;
  left: 3rem;
  color: white;
  font-size: 3.5rem;
  letter-spacing: 0.5rem;
  border-bottom: 2px solid white;
  background-color: #16a085;
  border: 2px solid #38ef7d;
  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  z-index: 1;
`;

export default () => {
  return <div className={Logo}>R.A</div>;
};
