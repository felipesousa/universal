require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-60406413-1",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "src",
      path: `${__dirname}/src/content`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        "gatsby-remark-relative-images",
        "gatsby-remark-responsive-iframe",
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 600,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
            escapeEntities: {},
          },
        },
      ],
    },
  },
  // {
  //   resolve: `gatsby-plugin-manifest`,
  //   options: {
  //     name: `gatsby-starter-default`,
  //     short_name: `starter`,
  //     start_url: `/`,
  //     background_color: `#663399`,
  //     theme_color: `#663399`,
  //     display: `minimal-ui`,
  //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  //   },
  // },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];

const siteMetadata = {
  title: `Felipe Sousa`,
  subtitle: `Front-End Engineer`,
  description: {
    prefix: `A Brazilian living in Santiago working at `,
    suffix: `Using this <space> to archive and share my career, projects and dev/life-experiences.`,
  },
  author: `Felipe Sousa`,
};

module.exports = {
  siteMetadata,
  plugins,
};
