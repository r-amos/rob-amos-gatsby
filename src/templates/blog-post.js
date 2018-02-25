import React from "react";

import Post from "../components/posts/Post";

export default ({ data }) => {
  console.log(data);
  return (
    <Post
      title={data.markdownRemark.frontmatter.title}
      content={data.markdownRemark.html}
      date={data.markdownRemark.frontmatter.date}
    />
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        slug
      }
    }
  }
`;
