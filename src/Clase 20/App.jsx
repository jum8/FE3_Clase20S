import { useState } from 'react'
import './App.css'
import LSexample from './Clase 20/LSexample'

const App = () =>  {
  const user = localStorage.getItem('user')
  const parsedUser = JSON.parse(user)
  console.log(parsedUser)
  return (
    <>
    {user}
      <LSexample/>
      <button onClick={() => localStorage.removeItem('user')}>Borrar user</button>
      <button onClick={() => localStorage.clear()}>Limpiar todo el LS</button>
    </>
  )
}

export default App
