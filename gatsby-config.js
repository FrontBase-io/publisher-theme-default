module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Default",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        rootKey: "pages",
        url: "https://frontbase.vtvc.nl/api/publisher-pages/read?apiKey=2khpem2jpkw4tf0bp2khpem2jpkw4tf0bq",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        rootKey: "site",
        url: "https://frontbase.vtvc.nl/api/publisher-sites/read?apiKey=2khpem2jpkw4tf0bp2khpem2jpkw4tf0bq",
      },
    },
  ],
};
