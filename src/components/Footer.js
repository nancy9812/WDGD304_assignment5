import React from "react";
import MailModal from "./MailModal";
import FooterBottom from "./FooterBottom";
import linkedin from "./images/linkedin.svg"
import instagram from "./images/instagram.svg"
import github from "./images/github.svg"
import mail from "./images/mail.svg"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        {}
        {}
        <a href="https://www.linkedin.com/in/nancy-ma98" target="_blank">
          <img src={linkedin} alt="LinkedIn Logo" />
        </a>
        <a href="https://www.instagram.com/purplez_nancy/" target="_blank">
          <img src={instagram} alt="Instagram Logo" />
        </a>
        <a href="https://github.com/nancy9812" target="_blank">
          <img src={github} alt="Github Logo" />
        </a>
        <span id="mailBtn">
          <img src={mail} alt="Mail Logo" />
        </span>
        <MailModal></MailModal>
        {}
        <FooterBottom></FooterBottom>
      </div>
    );
  }
}

export default Footer;