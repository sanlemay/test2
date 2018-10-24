module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography.js`,
            },
          },
        ],
  }

 /* module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-emotion`,
        options: {
          // Accepts all options defined by `babel-plugin-emotion` plugin.
        },
      },
    ],
  }*/