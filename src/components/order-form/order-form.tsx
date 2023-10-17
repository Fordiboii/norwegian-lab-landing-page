import React, { FC, useContext, useState } from "react";
import './order-form.css';
import { LANGUAGES } from "../../utils/languages";
import { LanguageContext } from "../../context/language-context";
import { alphaNumericRegex } from "../../utils/string-patterns";
import { useTranslation } from "react-i18next";

const FORM_INPUT_IDS = Object.freeze({
  FIRST_NAME: 'FIRST_NAME',
  SURNAME: 'SURNAME',
  EMAIL: 'EMAIL',
  ADDRESS: 'ADDRESS',
  CITY: 'CITY',
  POSTAL_CODE: 'POSTAL_CODE',
  COUNTRY: 'COUNTRY'
});

const handleFormInputValidationError = (e: React.FormEvent<HTMLInputElement>, language: string) => {
  const target = e.target as HTMLInputElement;
  
  // only translate for other languages than English
  if (language !== LANGUAGES.EN) {
    if (target.validity.valueMissing) {
      target.setCustomValidity('Vennligst fyll ut feltet.');
    } else if (target.validity.badInput) {
      target.setCustomValidity('Feilmelding.')
    } else if (target.validity.patternMismatch) {
      target.setCustomValidity('Feilmelding.')
    } else if (target.validity.rangeOverflow) {
      target.setCustomValidity('Feilmelding.')
    } else if (target.validity.rangeUnderflow) {
      target.setCustomValidity('Feilmelding.')
    } else if (target.validity.stepMismatch) {
      target.setCustomValidity('Feilmelding.')
    } else if (target.validity.tooLong) {
      target.setCustomValidity('Feilmelding.')
    } else if (target.validity.tooShort) {
      target.setCustomValidity('Feilmelding.')
    } else if (target.validity.typeMismatch) {
      target.setCustomValidity('Feilmelding.')
    } else {
      // TODO: handle clearing custom error correctly
      // Reset custom error
      target.setCustomValidity('');
    }
  }
}

const OrderForm: FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const [submitStatus, setSubmitStatus] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(true);
  }

  return (
    <div className="orderFormContainer">
      {submitStatus ? (<h2>{t('form_submit_success_message')}</h2>) : (

      <form onSubmit={handleSubmit} className="orderForm">
        <div className="twoColumnsContainer">
          <input
            className="twoColumn"
            type="text"
            pattern={alphaNumericRegex}
            id={FORM_INPUT_IDS.FIRST_NAME}
            required
            placeholder={t('form_first_name')}
            onInvalid={(e) => handleFormInputValidationError(e, language)}
          />
          <input
            className="twoColumn"
            type="text"
            pattern={alphaNumericRegex}
            id={FORM_INPUT_IDS.SURNAME}
            required
            placeholder={t('form_surname')}
            onInvalid={(e) => handleFormInputValidationError(e, language)}
          />
        </div>
        <input
          type="email"
          id={FORM_INPUT_IDS.EMAIL}
          required
          placeholder={t('form_email')}
          onInvalid={(e) => handleFormInputValidationError(e, language)}
        />
        <input
          type="text"
          id={FORM_INPUT_IDS.ADDRESS}
          required
          placeholder={t('form_address')}
          onInvalid={(e) => handleFormInputValidationError(e, language)}
        />
        <div className="twoColumnsContainer">
          <input
            type="text"
            id={FORM_INPUT_IDS.CITY}
            required
            placeholder={t('form_city')}
            onInvalid={(e) => handleFormInputValidationError(e, language)}
          />
          <input
            type="text"
            id={FORM_INPUT_IDS.POSTAL_CODE}
            required
            placeholder={t('form_postal_code')}
            onInvalid={(e) => handleFormInputValidationError(e, language)}
          />
        </div>
        <input
          type="text"
          id={FORM_INPUT_IDS.COUNTRY}
          required
          placeholder={t('form_country')}
          onInvalid={(e) => handleFormInputValidationError(e, language)}
        />
        <input type="submit" value={t('form_order')}></input>
      </form>
      )}
    </div>
  )
};

export default OrderForm;