const path = require("path");

module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      builderOptions: {
        publish: ["github"],
      },
    },
  },
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) => addStyleResource(config.module.rule("stylus").oneOf(type)));
  },
  configureWebpack: {
    target: "web",
  },
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/styles/colors.styl")],
    });
}
