import path from 'path';

const slugify = (s) => {
  return s.toLowerCase().replace(/ /g, '-');
};

const docIndex = [{
  title: "Getting Started",
  content: [{
    title: "Installation"
  }, {
    title: "Setup Main"
  }, {
    title: "Setup Renderer"
}]}, {
  title: "Sending Messages",
  content: [{
    title: "Sending Request"
  }, {
    title: "Sending Response"
  }, {
    title: "Sending Updates"
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
    'react-static-plugin-mdx',
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
