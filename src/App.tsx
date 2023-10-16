import React, { FC, useState } from 'react'
import './App.css'
import AboveTheFold from './components/above-the-fold/above-the-fold'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import OrderForm from './components/order-form/order-form'
import { LANGUAGES } from './utils/languages'
import { LanguageContext } from './context/language-context'

const App: FC = () => {
  const [language, setLanguage] = useState(LANGUAGES.NO as string);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className='mainContainer'>
        <Header />
        <AboveTheFold/>
        <OrderForm />
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}

export default App
