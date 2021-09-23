//Imagens
//https://spacejelly.dev/posts/how-to-use-cloudinary-images-in-next-js-with-blurred-placeholders/
//https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/

module.exports = {
  trailingSlash: true,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId },
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/sobre': { page: '/sobre' },
  //     '/equipe': { page: '/equipe' },
  //     '/contato': { page: '/contato' },
  //     '/posts': { page: '/posts' },
  //     '/post/o-que-e-o-contrato-social/': {
  //       page: '/post',
  //       query: { title: 'o-que-e-o-contrato-social' },
  //     },
  //   };
  // },
  images: {
    domains: ['res.cloudinary.com'],
  },
  // images: {
  //   loader: 'cloudinary',
  //   path: 'https://res.cloudinary.com/dgiqhufpy/',
  // },
  // webpack(config) {
  //   config.resolve.modules.push(__dirname);

  //   return config;
  // },
};
