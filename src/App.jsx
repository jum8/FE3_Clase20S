import { useState } from 'react'
import './App.css'
import LoboEstepario from './Clase 19/LoboEstepario'
import ParentComponent from './Clase 19/ParentComponent'

const App = () =>  {

  return (
    <>
      <ParentComponent />
      <LoboEstepario />
    </>
  )
}

export default App
