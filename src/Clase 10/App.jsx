import { useState } from 'react'
import './App.css'
import Login from './Clase 10/Components/Login'
import Home from './Clase 10/Pages/Home'

const App = () =>  {
  const [total, setTotal] = useState(0)

  const comprar = () => {
    // setTotal(prev => prev +1)
    setTotal(total + 1)
  }
  return (
    <>
      <Login/>
      <Home comprar={comprar}/>
      <h1>{total}</h1>
    </>
  )
}

export default App
