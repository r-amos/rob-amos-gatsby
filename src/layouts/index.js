import React from "react";
import { injectGlobal } from "emotion";
import { css } from "emotion";
import "./index.css";

import Header from "../components/Header";

injectGlobal`



*,
*::after,
*::before {
  margin: 0px;
  padding: 0px;
  box-sizing: inherit;
  font-family: 'Patua One';
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  background: linear-gradient(to right, #1e3c72, #2a5298);
}
`;

export default ({ children }) => {
  return (
    <div>
      <Header />
      <div
        className={css`
          margin-top: 7rem;
        `}
      >
        {children()}
      </div>
    </div>
  );
};
