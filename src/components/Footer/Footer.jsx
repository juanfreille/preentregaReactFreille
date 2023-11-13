import React from "react";
import "./Footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer_style">
      <a href="https://www.facebook.com/jifstylestore/" target="_blank">
        <BiLogoFacebook className="footer-icons" />
      </a>
      <a href="https://twitter.com/jifstylestore" target="_blank">
        <BiLogoTwitter className="footer-icons" />
      </a>
      <a href="https://ar.linkedin.com/company/jifstyle" target="_blank">
        <BiLogoLinkedin className="footer-icons" />
      </a>
      <a href="https://www.youtube.com/channel" target="_blank">
        <BiLogoYoutube className="footer-icons" />
      </a>
      <a href="https://www.instagram.com/jifstylestore/" target="_blank">
        <BiLogoInstagram className="footer-icons" />
      </a>
    </footer>
  );
};

export default Footer;
