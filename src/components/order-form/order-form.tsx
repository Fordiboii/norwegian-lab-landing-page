import React, { FC, useContext, useState } from "react";
import './order-form.css';
import { LANGUAGES } from "../../utils/languages";
import { LanguageContext } from "../../context/language-context";
import { alphaNumericRegex } from "../../utils/string-patterns";

const FORM_INPUT_IDS = Object.freeze({
  FIRST_NAME: 'FIRST_NAME',
  SURNAME: 'SURNAME',
  EMAIL: 'EMAIL',
  ADDRESS: 'ADDRESS',
  CITY: 'CITY',
  POSTAL_CODE: 'POSTAL_CODE',
  COUNTRY: 'COUNTRY'
});

const OrderForm: FC = () => {
  const { language } = useContext(LanguageContext);
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(true);
  }

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

  return (
    <div className="orderFormContainer">
      {submitStatus ? (<h2>{"Takk for din bestilling!"}</h2>) : (

      <form onSubmit={handleSubmit} className="orderForm">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <input
            style={{ flexGrow: 1 }}
            type="text"
            pattern={alphaNumericRegex}
            id={FORM_INPUT_IDS.FIRST_NAME}
            required
            placeholder={"Fornavn"}
            onInvalid={(e) => handleFormInputValidationError(e, language)}
          />
          <input
            style={{ flexGrow: 1 }}
            type="text"
            pattern={alphaNumericRegex}
            id={FORM_INPUT_IDS.SURNAME}
            required
            placeholder={"Etternavn"}
            onInvalid={(e) => handleFormInputValidationError(e, language)}
          />
        </div>
        <input
          type="email"
          id={FORM_INPUT_IDS.EMAIL}
          required
          placeholder={"Epost"}
          onInvalid={(e) => handleFormInputValidationError(e, language)}
        />
        <input
          type="text"
          id={FORM_INPUT_IDS.ADDRESS}
          required
          placeholder={"Gateadresse"}
          onInvalid={(e) => handleFormInputValidationError(e, language)}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <input
            type="text"
            id={FORM_INPUT_IDS.CITY}
            required
            placeholder={"By"}
            onInvalid={(e) => handleFormInputValidationError(e, language)}
          />
          <input
            type="text"
            id={FORM_INPUT_IDS.POSTAL_CODE}
            required
            placeholder={"Postnummer"}
            onInvalid={(e) => handleFormInputValidationError(e, language)}
          />
        </div>
        <input
          type="text"
          id={FORM_INPUT_IDS.COUNTRY}
          required
          placeholder={"Land"}
          onInvalid={(e) => handleFormInputValidationError(e, language)}
        />
        <input type="submit" value={"Bestill"}></input>
      </form>
      )}
    </div>
  )
};

export default OrderForm;