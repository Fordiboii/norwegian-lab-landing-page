import { FC, useContext } from "react";
import './header.css';
import { LANGUAGES } from "../../utils/languages";
import { LanguageContext } from "../../context/language-context";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const language = e.target.value.toLowerCase();
    i18n.changeLanguage(language);
    // setLanguage(language);
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
