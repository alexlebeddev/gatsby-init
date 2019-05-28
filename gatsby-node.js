/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const routeList = [{
  path: '/test/*',
  component: './src/templates/test.jsx',
}];


exports.createPages = async ({ actions: { createPage } }) => {
  routeList.forEach(({ path, component }) => {
    createPage({
      path,
      matchPath: '/test/:ccc',
      component: require.resolve(component),
    });
  });
};

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions;
//
//   if (page.path.match(/^\/test\//)) {
//     deletePage(page);
//
//     const newPage = {
//       ...page,
//       matchPath: '/test/:ccc',
//       context: {
//         ...page.context,
//         slug: '/test/:ccc',
//       },
//     };
//
//     createPage(newPage);
//   }
// };
