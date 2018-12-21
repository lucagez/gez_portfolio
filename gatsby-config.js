module.exports = {
  siteMetadata: {
    title: `Luca Gesmundo | web developer`,
    author: `Luca Gesmundo`,
    description: `Personal website of Luca Gesmundo. Web developer. Javascript expert.`,
    siteUrl: `https://lucagez.net/`,
    social: {
      twitter: `lucagez`,
      github: `lucagez`
    },
    twDescription: `twitter profile of Luca Gesmundo`,
    ghDescription: `github profile of Luca Gesmundo. check out all his code.`,
    lang: `en`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `things`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luca Gesmundo | web developer`,
        short_name: 'lucagez',
        start_url: '/',
        background_color: '#E9F4FF',
        theme_color: '#E9F4FF',
        display: 'minimal-ui'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lucagez`,
        short_name: `lucagez`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/icon/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}