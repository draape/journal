const isProduction = process.env.NODE_ENV === "production"

require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: process.env.GATSBY_APP_NAME,
        short_name: process.env.GATSBY_APP_SHORT_NAME,
        start_url: "/",
        background_color: process.env.GATSBY_BACKGROUND_COLOR,
        theme_color: process.env.GATSBY_THEME_COLOR,
        display: "standalone",
        icon: process.env.GATSBY_ICON_URL,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: !isProduction,
        overlayDrafts: !isProduction,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
  ],
}
