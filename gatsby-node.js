/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const routeList = [{
  path: '/test/:ccc',
  component: './src/templates/test.jsx',
}];


exports.createPages = async ({ actions: { createPage } }) => {
  routeList.forEach(({ path, component }) => {
    createPage({
      path,
      component: require.resolve(component),
    });
  });
};
