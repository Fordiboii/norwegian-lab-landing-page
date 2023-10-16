import { FC, useContext } from "react";
import './header.css';
import { LANGUAGES } from "../../utils/languages";
import { LanguageContext } from "../../context/language-context";

const Header: FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setLanguage(e.target.value);
  }

  return (
    <div className="header">
      <select onChange={handleChange} defaultValue={language} className="languageSelector">
        <option value={LANGUAGES.EN}>{LANGUAGES.EN}</option>
        <option value={LANGUAGES.NO}>{LANGUAGES.NO}</option>
      </select>
    </div>  
  );
}

export default Header;
