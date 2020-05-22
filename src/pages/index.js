import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SocialLink from '../components/SocialLink';
import './index.module.css';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        keywords={[
          `sanjiv kumar`,
          `portfolio`,
          `software`,
          `engineer`,
          `web development`,
          `Angular`,
          `React`,
          `TypeScript`,
          `JavaScript`,
          `Python`,
          `mrsan22`,
        ]}
      />
      <div
        style={{
          position: 'relative',
        }}
      >
        <div className="js-color-stop" data-background-color={'white'} styleName="wrapper" style={{ height: '97vh' }}>
          <div styleName="header">
            <div styleName="fade-top">
              <h1 styleName="title">Sanjiv Kumar</h1>
              <p styleName="description">software engineer</p>
            </div>
            <div styleName="social-links fade-bottom">
              <SocialLink name="Email" icon={faEnvelope} href="mailto:mr.san.kumar@gmail.com" />
              <SocialLink name="Twitter" icon={faTwitter} href="https://twitter.com/esanjiv" />
              <SocialLink name="GitHub" icon={faGithub} href="https://github.com/mrsan22" />
              <SocialLink name="Medium" icon={faMedium} href="https://medium.com/@esanjiv" />
              <SocialLink name="LinkedIn" icon={faLinkedin} href="https://www.linkedin.com/in/esanjivkumar/" />
              <SocialLink name="InDepth.dev" icon={faBlog} href="https://indepth.dev/author/sanjiv/" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
