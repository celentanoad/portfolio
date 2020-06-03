import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/grayscale.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              
              meta={[
                { name: 'description', content: 'Alanna Celentano portfolio' },
                { name: 'keywords', content: 'Alanna Celentano, portfolio, web developer, software engineer' },
                { property: 'og:image', content: 'https://i.imgur.com/7s6ufNh.png'},
              ]}
            >
              <html lang="en" prefix="og: http://ogp.me/ns#"/>
            </Helmet>
            <div className={'page-top'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
