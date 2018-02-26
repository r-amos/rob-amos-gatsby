import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

import PostSummary from "../components/posts/PostSummary";
import PageTitle from "../components/PageTitle";

const Blog = css`
  width: 60%;
  margin: 0 auto;

  hr {
    height: 1rem;
    width: 30rem;
    margin: 0 auto 5rem auto;
    border: 0;
    height: 0px;
    border-top: 5px solid #fff;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
  }
`;

export default ({ data }) => {
  return (
    <div className={Blog}>
      <PageTitle text={"Latest Posts"} />
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <PostSummary
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            date={node.frontmatter.date}
          />
        );
      })}
    </div>
  );
};

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`;
