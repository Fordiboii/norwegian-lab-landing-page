import React, { FC } from "react";
import './order-form.css';

const FORM_INPUT_IDS = Object.freeze({
  FIRST_NAME: 'FIRST_NAME',
  SURNAME: 'SURNAME',
  EMAIL: 'EMAIL',
  ADDRESS: 'ADDRESS',
  CITY: 'CITY',
  POSTAL_CODE: 'POSTAL_CODE',
  COUNTRY: 'COUNTRY'
});

const handleFormInputValidationError = (e: React.FormEvent<HTMLInputElement>) => {
  const target = e.target as HTMLInputElement;
  if (target.validity.valueMissing) {
    return target.setCustomValidity('Må fylles ut.');
  }
  target.setCustomValidity('');
}

const OrderForm: FC = () => (
  <div className="orderFormContainer">
    <form className="orderForm">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <input
          style={{ flexGrow: 1 }}
          type="text"
          id={FORM_INPUT_IDS.FIRST_NAME}
          required
          placeholder={"Fornavn"}
          onInvalid={handleFormInputValidationError}
        />
        <input
          style={{ flexGrow: 1 }}
          type="text"
          id={FORM_INPUT_IDS.SURNAME}
          required
          placeholder={"Etternavn"}
          onInvalid={handleFormInputValidationError}
        />
      </div>
      <input
        type="email"
        id={FORM_INPUT_IDS.EMAIL}
        required
        placeholder={"Epost"}
        onInvalid={handleFormInputValidationError}
      />
      <input
        type="text"
        id={FORM_INPUT_IDS.ADDRESS}
        required
        placeholder={"Gateadresse"}
        onInvalid={handleFormInputValidationError}
      />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <input
          type="text"
          id={FORM_INPUT_IDS.CITY}
          required
          placeholder={"By"}
          onInvalid={handleFormInputValidationError}
        />
        <input
          type="text"
          id={FORM_INPUT_IDS.POSTAL_CODE}
          required
          placeholder={"Postnummer"}
          onInvalid={handleFormInputValidationError}
        />
      </div>
      <input
        type="text"
        id={FORM_INPUT_IDS.COUNTRY}
        required
        placeholder={"Land"}
        onInvalid={handleFormInputValidationError}
      />
      <input type="submit"></input>
    </form>
  </div>
);

export default OrderForm;