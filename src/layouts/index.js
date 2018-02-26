import React from "react";
import { injectGlobal } from "emotion";
import { css } from "emotion";

import Header from "../components/Header";

injectGlobal`

@import url('https://fonts.googleapis.com/css?family=Patua+One');
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Oswald');

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
  background: linear-gradient(to left, #11998e, #38ef7d);
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
