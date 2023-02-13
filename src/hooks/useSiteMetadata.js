import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiGlobal {
        twitterCreator
        siteUrl
        seo {
          keywords
          metaDescription
          metaTitle
          preventIndexing
          shareImage {
            url
            alternativeText
          }
        }
      }
    }
  `);

  return data.strapiGlobal;
};
