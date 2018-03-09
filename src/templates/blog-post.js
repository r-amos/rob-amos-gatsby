import React from "react";
import Post from "../components/posts/Post";

export default ({ data }) => {
  return (
    <Post
      title={data.markdownRemark.frontmatter.title}
      content={data.markdownRemark.html}
      date={data.markdownRemark.frontmatter.date}
    />
  )};

export const query = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "DD MMMM, YYYY")
        path
      }
    }
  }
`;
                            