import './App.css'
import AboveTheFold from './components/above-the-fold/above-the-fold'
import Footer from './components/footer/footer'
import OrderForm from './components/order-form/order-form'

function App() {
  return (
    <div className='mainContainer'>
      <div className="header">
        <p style={{ paddingLeft: '1em'}}>Norwegian Labs</p>
      </div>
      <AboveTheFold/>
      <OrderForm />
      <Footer />
    </div>
  )
}

export default App
