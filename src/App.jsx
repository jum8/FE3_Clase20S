import { useState } from 'react'
import './App.css'
import Counter from './Clase 20/Counter'
import LSexample from './Clase 20/LSexample'
import UserList from './Clase 20/UserList'

const App = () =>  {
  const user = localStorage.getItem('user')
  const parsedUser = JSON.parse(user)
  // console.log(parsedUser)
  return (
    <>
      <LSexample/>
      {/* <button onClick={() => localStorage.removeItem('user')}>Borrar user</button>
      <button onClick={() => localStorage.clear()}>Limpiar todo el LS</button> */}
      {/* <Counter/> */}
      <UserList/>
    </>
  )
}

export default App
