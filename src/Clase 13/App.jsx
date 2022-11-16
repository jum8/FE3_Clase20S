import { useState } from 'react'
import './App.css'
import ClassComponent from './Clase 13/ClassComponent'
import FuncComponent from './Clase 13/FuncComponent'


const App = () =>  {

  const [toggle, setToggle] = useState(false)

  return (
    <>
    {toggle ? <ClassComponent/> :  <FuncComponent/>}
      <button onClick={() => setToggle(!toggle)}>
        Cambiar de componente
      </button>
    </>
  )
}

export default App
