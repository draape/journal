const isProduction = process.env.NODE_ENV === "production"

require("dotenv").config()

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: !isProduction,
        overlayDrafts: !isProduction,
      },
    },
  ],
}
