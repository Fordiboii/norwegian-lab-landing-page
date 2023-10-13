import React, { FC } from "react";

const OrderForm: FC = () => (
  <>
    <form>
      <input
        type="text"
        required
        placeholder={"Fornavn"}
      />
      <input
        type="text"
        required
        placeholder={"Etternavn"}
      />
      <input
        type="email"
        required
        placeholder={"Epost"}
      />
      <input
        type="text"
        required
        placeholder={"Gate"}
      />
      <input
        type="text"
        required
        placeholder={"By"}
      />
      <input
        type="text"
        required
        placeholder={"Postnummer"}
      />
      <input
        type="text"
        required
        placeholder={"Land"}
      />
      <input type="submit"></input>
    </form>
  </>
);

export default OrderForm;