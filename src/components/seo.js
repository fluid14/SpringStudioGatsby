import * as React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

function Seo({
  metaDescription: description,
  metaTitle: title,
  keywords,
  shareImage,
  preventIndexing,
  siteUrl,
  twitterCreator,
  children,
}) {
  const {
    seo: {
      keywords: defaultKeywords,
      metaTitle: defaultMetaTitle,
      metaDescription: defaultMetaDescription,
      preventIndexing: defaultPreventIndexing,
      shareImage: { url: defaultShareImageUrl },
    },
    siteUrl: defaultSiteUrl,
    twitterCreator: defaultTwitterCreator,
  } = useSiteMetadata();

  const metaTitle = title || defaultMetaTitle;
  const metaDescription = description || defaultMetaDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaPreventIndexing = preventIndexing || defaultPreventIndexing;
  const metaImage = `${defaultSiteUrl}${defaultShareImageUrl}` || `${siteUrl}${shareImage?.url}`;
  const metaSiteUrl = siteUrl || defaultSiteUrl;
  const metaTwitterCreator = twitterCreator || defaultTwitterCreator;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="image" content={metaImage} />
      <meta name="description" key="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" key="og:title" content={metaTitle} />
      <meta property="og:description" key="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" key="og:url" content={metaSiteUrl} />
      <meta property="og:image" key="og:image" content={metaImage} />
      <link rel="canonical" href={metaSiteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={metaTwitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaPreventIndexing && (
        <>
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
        </>
      )}
      {children}
    </>
  );
}

export default Seo;
