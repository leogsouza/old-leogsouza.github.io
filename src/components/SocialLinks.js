import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/leogsouza">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.twitter.com/leogsouza">
        <FaTwitter />
      </a>
    </li>    
    <li>
      <a target="_blank" href="https://www.instagram.com/leogsouza">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.github.com/leogsouza">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
