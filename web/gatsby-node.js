const path = require(`path`)
const DirectoryNamedPlugin = require("directory-named-webpack-plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        lib: path.resolve(__dirname, "src/lib"),
        static: path.resolve(__dirname, "static/"),
      },
      plugins: [
        new DirectoryNamedPlugin({
          include: [path.resolve(__dirname, "src/components")],
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.scss/,
          loader: "import-glob-loader",
        },
      ],
    },
  })
}
