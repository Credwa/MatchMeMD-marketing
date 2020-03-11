const path = require('path');

module.exports = {
  siteMetadata: {
    title: `MatchMeMD`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    test: 'what',
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src')
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: require(`./src/themes/theme.js`)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MatchMeMD Site`,
        short_name: `MMD`,
        start_url: `/`,
        background_color: `#F8FCFC`,
        theme_color: `#00A8BA`,
        display: `minimal-ui`,
        icon: `src/assets/images/MatchMeMD-icon.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};
