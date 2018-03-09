import React from 'react';
import Link from 'gatsby-link';
import {css} from 'emotion';

const tag = css`
  font-size: 1.5rem;
  font-weight: 100;
  color: white;
  background-color: #34495e;
  border: 1px solid #1e3c72;
  padding: 0.25rem 1rem;
  margin: 0 0.2rem;
  cursor: pointer;
  text-decoration:none;
`;

export default ({name}) => {

    return <Link className={tag} to={`../blog/${name}`}>{name}</Link>;

}