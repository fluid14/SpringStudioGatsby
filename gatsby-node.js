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
             ... on STRAPI__COMPONENT_SECTIONS_CONTACT {
              componentId
              id
              label {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              strapi_component
              strapi_id
              textAfterSend
              signature
            }
             ... on STRAPI__COMPONENT_SECTIONS_FAQ {
              componentId
              id
              additional {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              faqElement {
                id
                answer {
                  data {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
                question
              }
              signature
              strapi_component
              title
            }
              ... on STRAPI__COMPONENT_SECTIONS_PRICING {
              componentId
              id
                package_options {
                    id
                    options {
                        id
                        text
                    }
                   title
                   type
                   price
                   priceAdditional
                   isMark
                   chooseContactLabel
                   description {
                       data
                   }
                }
              description {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              addnotation {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              strapi_component
              title
            }
              ... on STRAPI__COMPONENT_SECTIONS_STEPS {
              componentId
              id
              title
              signature
              steps {
                description {
                  data {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
                icon {
                  localFile {
                    url
                  }
                }
                title
                isSpecialIcon
              }
              strapi_component
            }
            ... on STRAPI__COMPONENT_SECTIONS_CONTACT_WITH_CLIENTS {
              componentId
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
              componentId
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
            ... on STRAPI__COMPONENT_SECTIONS_WHAT_WE_DO {
              componentId
              id
              description {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
              strapi_component
              title
              whatWeDoBlock {
                title
                icon {
                  localFile {
                    url
                  }
                  alternativeText
                }
                description {
                  data {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

    // package_options {
    //     options {
    //         text
    //     }
    //     title
    //     type
    //     price
    //     priceAdditional
    //     isMark
    //     description {
    //         data
    //     }
    // }

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


