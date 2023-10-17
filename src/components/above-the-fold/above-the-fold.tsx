import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const AboveTheFold: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('above_the_fold_header')}</h1>
      <p>
        {t('above_the_fold_description')}
      </p>
      <a href="/order">
        <button>{t('above_the_fold_order_now')}</button>
      </a>
      <div style={{ paddingBottom: '1em' }}></div>
    </> 
  );
}

export default AboveTheFold;