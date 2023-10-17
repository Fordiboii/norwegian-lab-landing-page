import React, { FC } from 'react'
import './App.css'
import AboveTheFold from './components/above-the-fold/above-the-fold'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import OrderForm from './components/order-form/order-form'
import "./internationalization/i18n";

const App: FC = () => {
  return (
    <div className='mainContainer'>
      <Header />
      <AboveTheFold/>
      <OrderForm />
      <Footer />
    </div>
  )
}

export default App
