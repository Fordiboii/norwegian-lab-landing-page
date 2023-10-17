import { FC } from "react";
import './footer.css';
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="links">
        <a href="https://norwegianlab.com/contact">{t("footer_contact")}</a>
        <a href="https://norwegianlab.com/privacy-policy">{t("footer_privact_policy")}</a>
        <a href="https://norwegianlab.com/terms-and-conditions">{t("footer_terms_and_conditions")}</a>
      </div>
      <p>{`© 2023 - Norwegian Lab AS. ${t("footer_all_rights_reserved")}.`}</p>
      <p>{`${t("footer_author")}: Fredrik Jenssen`}</p>
    </div>
  );
}

export default Footer;