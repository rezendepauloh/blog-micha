//Imagens
//https://spacejelly.dev/posts/how-to-use-cloudinary-images-in-next-js-with-blurred-placeholders/
//https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/

module.exports = {
  trailingSlash: true,
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
