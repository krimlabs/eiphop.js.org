export default {
  plugins: ['react-static-plugin-react-router'],
  getRoutes: async ({dev}) => [{
    path: '/',
    template: 'src/pages/Landing'
  }, {
    path: '/license',
    template: 'src/pages/License'
  }, {
    path: '/docs',
    template: 'src/pages/Docs'
  }]
}
