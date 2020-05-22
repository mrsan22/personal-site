import { config } from '@fortawesome/fontawesome-svg-core';
// This ensures that the icon CSS is loaded immediately before attempting to render icons
// See https://github.com/FortAwesome/react-fontawesome/issues/134
import '@fortawesome/fontawesome-svg-core/styles.css';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isIOS } from 'react-device-detect';
import vhCheck from 'vh-check';
import './Layout.css';

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const Layout = ({ children }) => {
  useEffect(() => {
    // Workaround Chrome scroll snap not working with font-face
    // See https://stackoverflow.com/questions/52801404/font-face-stops-scroll-snap-points-from-working
    // Also disable scroll snap on iOS because of the visual glitch when combined with an animation
    // See https://stackoverflow.com/questions/52989070/css-scroll-snap-visual-glitches-on-ios-when-programmatically-setting-style-on
    setTimeout(() => {
      !isIOS && document.body.classList.add('snap');
    }, 0);

    // iOS / Android viewport workaround
    vhCheck();
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              repositoryUrl
              commitHash
            }
          }
        }
      `}
      render={(data) => {
        return (
          <>
            <div>
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()} Sanjiv Kumar, built with <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
