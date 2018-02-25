import React from "react";
import { css } from "emotion";

import Navigation from "./Navigation";

const menuPanel = css`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #11998e;
  box-shadow: -3px 3px 20px rgba(0, 0, 0, 0.7);
  padding: 0 2rem 1rem 2rem;
`;

export default () => {
  return (
    <div className={menuPanel}>
      <Navigation />
    </div>
  );
};
