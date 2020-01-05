import path from 'path';

const slugify = (s) => {
  return s.toLowerCase().replace(/ /g, '-');
};

const docIndex = [{
  title: "Getting Started",
  content: [{
    title: "Installation"
  }, {
    title: "Mental Model"
  },{
    title: "Setup Main"
  }, {
    title: "Setup Renderer"
}]}, {
  title: "Usage",
  content: [{
    title: "Requests"
  }, {
    title: "Notifiers"
  }]
}, {
  title: "API",
  content: [{
    title: 'setupMainHandler'
  }, {
    title: 'setupFrontendListener'
  }, {
    title: 'emit'
  }]
}];

const docRoutes = docIndex.map(top => top.content.map(c => ({
  path: `${slugify(top.title)}/${slugify(c.title)}`,
  template: 'src/templates/Docs',
  getData: () => ({docIndex, doc: c})
}))).reduce((acc, next) => ([...acc, ...next]), []);

export default {
  plugins: [
    'react-static-plugin-react-router',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: 'src/pages',
      },
    ]
  ],
  getRoutes: async ({dev}) => [{
    path: '/docs',
    template: 'src/templates/Docs',
    getData: () => ({docIndex}),
    children: docRoutes
  }]
}
