const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
});

// const babelMinifyConfig = withBabelMinify();
// const sassConfig = withSass();
// const postCssConfig = withCSS();

// // module.exports = withSass(withBabelMinify(nextConfig));
// module.exports = withPlugins([ sassConfig, babelMinifyConfig, postCssConfig], nextConfig);
