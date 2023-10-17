import { FC } from "react";
import './header.css';
import { LANGUAGES } from "../../utils/languages";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  }

  return (
    <div className="header">
      <select onChange={handleChange} defaultValue={language} className="languageSelector">
        <option value={LANGUAGES.EN}>{LANGUAGES.EN.toUpperCase()}</option>
        <option value={LANGUAGES.NO}>{LANGUAGES.NO.toUpperCase()}</option>
      </select>
    </div>  
  );
}

export default Header;
