const sass = require('@stencil/sass');

exports.config = {
  bundles: [
    {
      components: [
        'animated-background-dip-on-scroll',
      ]
    }
  ],
  collections: [],
  plugins: [
    sass({
      includePaths: ['/components/**']
    })
  ],
  outputTargets: [
    {
      type: 'dist'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
