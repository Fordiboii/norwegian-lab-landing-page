import React, { FC, useState } from "react";
import './order-form.css';
import { LANGUAGES } from "../../utils/languages";
import { alphaNumericRegex } from "../../utils/string-patterns";
import { useTranslation } from "react-i18next";
import i18next, { TFunction } from "i18next";

const FORM_INPUT_IDS = Object.freeze({
  FIRST_NAME: 'FIRST_NAME',
  SURNAME: 'SURNAME',
  EMAIL: 'EMAIL',
  ADDRESS: 'ADDRESS',
  CITY: 'CITY',
  POSTAL_CODE: 'POSTAL_CODE',
  COUNTRY: 'COUNTRY'
});

const handleFormInputValidationError = (e: React.FormEvent<HTMLInputElement>, language: string, t: TFunction) => {
  const target = e.target as HTMLInputElement;
  const { type: inputType } = target;

  // only translate for other languages than English (which is the default)
  if (language !== LANGUAGES.EN) {
    switch (inputType) {
      case 'email':
        if (target.validity.valueMissing) {
          target.setCustomValidity(t('form_missing_value'));
        } else if (target.validity.typeMismatch) {
          target.setCustomValidity(t('form_wrong_email_format'))
        } else {
          target.setCustomValidity('');
        }
        break;
      case 'text':
        if (target.validity.valueMissing) {
          target.setCustomValidity(t('form_missing_value'));
        } else if (target.validity.patternMismatch) {
          target.setCustomValidity(t('form_must_be_alphanumeric'))
        } else {
          target.setCustomValidity('');
        }
        break;
      default:
        target.setCustomValidity('');
        console.warn(`No custom error messages for type ${inputType}`)
    }
  }
}

// clear all error messages when language is changed
i18next.on('languageChanged', () => {
  // get all elements by id
  Object.values(FORM_INPUT_IDS).forEach(key => {
    const inputElement = document.getElementById(key) as HTMLInputElement;
    // set custom validity to empty string
    inputElement?.setCustomValidity?.('');
  })
})

const OrderForm: FC = () => {
  const { i18n, t } = useTranslation();
  const { language } = i18n;
  
  const [submitStatus, setSubmitStatus] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(true);
  }

  return (
    <div className="orderFormContainer">
      {submitStatus
        ? (<h2>{t('form_submit_success_message')}</h2>)
        : (
          <form onSubmit={handleSubmit} className="orderForm">
            <div className="twoColumnsContainer">
              <input
                className="twoColumn"
                type="text"
                pattern={alphaNumericRegex}
                id={FORM_INPUT_IDS.FIRST_NAME}
                required
                placeholder={t('form_first_name')}
                onInvalid={(e) => handleFormInputValidationError(e, language, t)}
              />
              <input
                className="twoColumn"
                type="text"
                pattern={alphaNumericRegex}
                id={FORM_INPUT_IDS.SURNAME}
                required
                placeholder={t('form_surname')}
                onInvalid={(e) => handleFormInputValidationError(e, language, t)}
              />
            </div>
            <input
              type="email"
              id={FORM_INPUT_IDS.EMAIL}
              required
              placeholder={t('form_email')}
              onInvalid={(e) => handleFormInputValidationError(e, language, t)}
            />
            <input
              type="text"
              id={FORM_INPUT_IDS.ADDRESS}
              required
              placeholder={t('form_address')}
              onInvalid={(e) => handleFormInputValidationError(e, language, t)}
            />
            <div className="twoColumnsContainer">
              <input
                type="text"
                id={FORM_INPUT_IDS.CITY}
                required
                placeholder={t('form_city')}
                onInvalid={(e) => handleFormInputValidationError(e, language, t)}
              />
              <input
                type="text"
                id={FORM_INPUT_IDS.POSTAL_CODE}
                required
                placeholder={t('form_postal_code')}
                onInvalid={(e) => handleFormInputValidationError(e, language, t)}
              />
            </div>
            <input
              type="text"
              id={FORM_INPUT_IDS.COUNTRY}
              required
              placeholder={t('form_country')}
              onInvalid={(e) => handleFormInputValidationError(e, language, t)}
            />
            <input type="submit" value={t('form_order')}></input>
          </form>
        )
      }
    </div>
  )
};

export default OrderForm;