import { FC } from 'react'
import './App.css'
import AboveTheFold from './components/above-the-fold/above-the-fold'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import OrderForm from './components/order-form/order-form'
import "./internationalization/i18n";

const App: FC = () => {
  return (
    <>
      <Header />
      <div className='mainContainer'>
        <AboveTheFold/>
        <OrderForm />
      </div>
      <Footer />
    </>
  )
}

export default App
