import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ data }) => (
  <StaticQuery
    query={query}
    render={data => {
      const meta = [];
      const keywords = [
        'Luca',
        'Gesmundo',
        'Luca Gesmundo',
        'web developer',
        'personal website',
        'portfolio',
        'portfolio website',
        'developer',
        'development',
        'front-end development',
        'front-end developer',
        'javascript engineer',
        'engineer',
        'javascript',
        'es6',
        'data visualization',
        'data scraping',
        'font end',
        'gatsby',
        'gatsbyjs',
        'react',
        'functional programming',
        'nodejs',
        'node',
        ]
      const site = data.site.siteMetadata;
      return (
        <Helmet
          htmlAttributes={site.lang}
          title={site.title}
          titleTemplate={`%s | ${site.title}`}
          meta={[
            {
              name: `description`,
              content: site.description,
            },
            {
              property: `og:title`,
              content: site.title,
            },
            {
              property: `og:description`,
              content: site.description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: site.author,
            },
            {
              name: `twitter:title`,
              content: site.title,
            },
            {
              name: `twitter:description`,
              content: site.twDescription,
            },
            {
              name: `github:card`,
              content: `summary`,
            },
            {
              name: `github:creator`,
              content: site.author,
            },
            {
              name: `github:title`,
              content: site.title,
            },
            {
              name: `github:description`,
              content: site.ghDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
                : []
            )
            .concat(meta)}
        />
      )
    }
    }
  />
)

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string)
}

export default SEO;

const query = graphql`
{
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}
`