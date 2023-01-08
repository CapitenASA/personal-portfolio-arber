/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { BsLinkedin, BsEnvelopeFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.linkedin.com/in/arber-mekrizvani/">
      <BsLinkedin />
      </a>
    </div>
    <div>
    <a href="https://github.com/CapitenASA/">
      <FaGithub />
      </a>
    </div>
    <div>
    <a href="mailto:mekrizvaniarber@gmail.com">
      <BsEnvelopeFill />
      </a>
    </div>
  </div>
);

export default SocialMedia;