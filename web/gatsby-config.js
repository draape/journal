require("dotenv").config()

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
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
