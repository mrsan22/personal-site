const url = require('url');

module.exports = {
  siteMetadata: {
    title: `Sanjiv Kumar`,
    description: `Personal Site of Sanjiv Kumar.`,
    author: `sanjivkumar`,
    // These are provided by the netlify build
    repositoryUrl:
      (process.env.REPOSITORY_URL &&
        // strip out the auth info present in the url
        url.format(new URL(process.env.REPOSITORY_URL), { auth: false })) ||
      '',
    commitHash: process.env.COMMIT_REF || 'code',
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || '',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sanjiv Kumar`,
        short_name: `Sanjiv`,
        start_url: `/`,
        // background_color: `#663399`,
        theme_color: `#fffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        // filetypes: {
        //   ".scss": { syntax: `postcss-scss` },
        // },

        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
