module.exports = {
  siteMetadata: {
    title: `Hassen Taidirt`,
    name: `Created with ♥️ by Hassen Taidirt & Gatsby`,
    siteUrl: `https://htaidirt.com`,
    description: `Personal blog of Hassen Taidirt about coding, freelancing and productivity`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/htaidirt`
      },
      {
        name: `github`,
        url: `https://github.com/htaidirt`
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/htaidirt/`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
