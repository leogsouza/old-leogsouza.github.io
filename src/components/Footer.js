import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";
import profilePic from "../assets/images/profile.jpg";

const Footer = () => (
  <footer id="footer">
    <div className="row">
    <div className="twelve columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div>
        <h2>Contact me!</h2>
        <h3><a href="mailto:leogsouza@gmail.com">leogsouza@gmail.com</a></h3>
      </div>
      <div className="twelve columns">
        <SocialLinks />
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
