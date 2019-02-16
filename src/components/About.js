import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import profilePic from "../assets/images/profile.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        I am a software developer expert building backend applications. I have strong knowledge building frontend applications
and mobile applications. I'm looking for opportunities to build new things and learn new concepts and technologies
to improve my carrer.
        </p>
        <div className="row">
          
          <div className="columns download">
            <p>
              <OutboundLink href="#download-resume" className="button">
                <FaCloudDownload /> Download Resume
              </OutboundLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
