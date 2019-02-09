import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I'm Leonardo Souza.</h1>
      <h3>
      I'm a software developer with 14+ years of experience. Currently I'm based in São Paulo, Brazil.
      I mostly do Backend Development (Node.js, PHP, Java and Golang) but I do enjoy Frontend (React, Angular and Vue.js) 
      and Mobile (Android, React Native) too.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
