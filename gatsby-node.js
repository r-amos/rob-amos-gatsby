const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path,
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      let distinctTags = [];
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.frontmatter.path}`,
          component: path.resolve("./src/templates/blog-post.js"),
          context: {
            path: node.frontmatter.path
          }
        });
        const {tags} = node.frontmatter;
        tags.forEach(tag => {if(!distinctTags.includes(tag)) distinctTags.push(tag)});
        distinctTags.forEach(tag => {
          createPage({
            path: `blog/${tag}`,
            component: path.resolve("./src/templates/tags.js"),
            context: {
              tag: tag
            }
          })
        });
      });
      resolve();
    });
  });
};
