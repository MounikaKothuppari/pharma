module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    stats: {
      warnings: false,
    },
    performance: {
      hints: false,
    },
    output: {
      globalObject: 'this',
    },
  },
};
