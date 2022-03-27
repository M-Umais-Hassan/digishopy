import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiYoutube />
        </a>
      </div>
      <p>© Copyright 2022, DigiShopy</p>
    </div>
  );
};

export default Footer;
