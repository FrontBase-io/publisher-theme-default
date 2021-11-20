const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allPages {
        nodes {
          name
          key
          content
        }
      }
    }
  `);
  return Promise.all(
    result.data.allPages.nodes.map(async (node) => {
      await createPage({
        path: node.key,
        component: path.resolve("./src/pages/page.js"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          key: node.key,
        },
      });
    })
  );
};
