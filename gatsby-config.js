module.exports = {
  siteMetadata: {
    siteTitle: 'Goran Codes',
    siteDescription: 'A place for Goran to put all his Code',
    siteUrl: 'https://goran.codes/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Goran Osim',
    authorDescription: "I like Kubernetes but it doesn't always like me", // short text about the author
    avatar: '/avatar.jpg',
    twitterUsername: "@goran_says"
    social: [
      {
        icon: `twitter`,
        url: `https://twitter.com/goran_says`
      },
      {
        icon: `github`,
        url: `https://github.com/salt-mountain`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-187477829-1'
      }
    }
  ]
};
