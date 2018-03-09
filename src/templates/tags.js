import React from 'react';
import Link from "gatsby-link";
import { css } from "emotion";

import PostSummary from "../components/posts/PostSummary";
import PageTitle from "../components/PageTitle";

const Blog = css`
  width: 60%;
  margin: 0 auto;

  hr {
    height: 1rem;
    width: 10rem;
    margin: 0 auto 5rem auto;
    border: 0;
    height: 0px;
    border-top: 5px solid #fff;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
  }
`;

export default ({ pathContext, data }) => {
  return (
    <div className={Blog}>
      <PageTitle text={`${pathContext.tag}`} />
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <PostSummary
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
            date={node.frontmatter.date}
          />
        );
      })}
    </div>
  );
};
export const query = graphql`
  query BlogTagQuery($tag: String!)  {
    allMarkdownRemark(
        filter: { frontmatter: { tags: { in: [$tag] } } } 
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;

