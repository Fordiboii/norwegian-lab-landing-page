import React, { FC } from "react";
import './footer.css';

const Footer: FC = () => (
  <div className="footer">
    <div className="links">
      <a href="https://norwegianlab.com/contact">CONTACT</a>
      <a href="https://norwegianlab.com/privacy-policy">PRIVACY POLICY</a>
      <a href="https://norwegianlab.com/terms-and-conditions">TERMS AND CONDITIONS</a>
    </div>
    <p>© 2023 - Norwegian Lab AS. All rights reserved.</p>
    <p>Author: Fredrik Jenssen</p>
  </div>
);

export default Footer;