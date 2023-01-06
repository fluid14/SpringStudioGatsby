/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`);

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const query = await graphql(`
    query MyQuery {
      allStrapiHomePage {
        nodes {
          body {
            ... on STRAPI__COMPONENT_SECTIONS_CONTACT_WITH_CLIENTS {
              id
              description {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              image {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
              strapi_component
              title
            }
            ... on STRAPI__COMPONENT_SECTIONS_HEADER {
              id
               description {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              title
              cta {
                href
                inNewTab
                isExternal
                label
              }
              image {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(backgroundColor: "transparent", placeholder: BLURRED)
                  }
                }
              }
              strapi_component
            }
          }
        }
      }
    }
  `);

    query.data.allStrapiHomePage.nodes.forEach(({body}) => {
        createPage({
            path: '/',
            component: path.resolve(`./src/layouts/default/default.js`),
            context: {
                data: body,
            },
        });
    });
};


