/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

interface Meta {
  description?: string;
  content?: string;
}

interface SEOProps {
  description?: string;
  lang?: string;
  meta: Meta[];
  title: string;
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription: string = description || site.siteMetadata.description;

  return (
    <HelmetProvider>
      <Helmet
        htmlAttributes={{
          lang
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author
          },
          {
            name: `twitter:title`,
            content: title
          },
          {
            name: `twitter:description`,
            content: metaDescription
          },
          ...meta
        ]}
      />
    </HelmetProvider>
  );
};

SEO.defaultProps = {
  meta: [],
  description: ``,
  title: ``,
  lang: 'en'
};

export default SEO;
