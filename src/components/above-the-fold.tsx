import React, { FC } from "react";
import './above-the-fold.css';

const AboveTheFold: FC = () => (
  <div className="card">
    <h1>{"Ta helsen til nye høyder?"}</h1>
    <p>
      {"Hos Norwegian Labs tilbyr vi innovative og verdensledende helseprodukter med påvist effekt. Gjør som tusenvis andre og bli et sunnere menneske med mer energi idag!"}
    </p>
    <a href="/order">
      <button>Bestill nå</button>
    </a>
  </div> 
);

export default AboveTheFold;