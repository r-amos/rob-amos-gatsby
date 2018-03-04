import React from 'react';
import {css} from 'emotion';

const tag = css`
  font-size: 1.5rem;
  font-weight: 100;
  color: white;
  background-color: #34495e;
  border: 1px solid #11998e;
  padding: 0.25rem 1rem;
  margin: 0 0.2rem;
  cursor: pointer;
`;

export default ({name}) => {

    return <span className={tag}>{name}</span>;

}