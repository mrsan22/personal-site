import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialLink.module.css';

const SocialLink = ({ name, href, icon }) => {
  return (
    <a styleName="link" href={href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} />
      <span styleName="title">{name}</span>
    </a>
  );
};

export default SocialLink;
