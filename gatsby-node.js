/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/test\//)) {
    deletePage(page);

    const newPage = {
      ...page,
      matchPath: '/test/:ccc',
      context: {
        ...page.context,
        slug: '/test/:ccc',
      },
    };

    createPage(newPage);
  }
};
