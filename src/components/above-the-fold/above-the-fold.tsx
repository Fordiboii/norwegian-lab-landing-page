import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import './above-the-fold.css';

const AboveTheFold: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <div className="contentWrapper">
        <h1>{t('above_the_fold_header')}</h1>
        <p>
          {t('above_the_fold_description')}
        </p>
        <button onClick={() => {
          const formEl = document.getElementsByClassName('orderFormContainer')?.[0] as HTMLFormElement | null;
          formEl?.scrollIntoView({ behavior: 'smooth' });
        }}>{t('above_the_fold_order_now')}</button>
      </div>
      <div className="imageContainer">
        <img src="https://images.squarespace-cdn.com/content/v1/5d87c3ec1b269753a392c57e/1569182116125-QUCJKKES5KLP2L47XRR2/AdobeStock_190816756.jpeg"></img>
      </div>
    </div> 
  );
}

export default AboveTheFold;