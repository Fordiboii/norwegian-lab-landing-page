import React, { FC } from "react";
import './header.css';

const Header: FC = () => (
  <div className="header">
    <select className="languageSelector">
      <option value="EN">EN</option>
      <option value="NO">NO</option>
    </select>
  </div>  
);

export default Header;
