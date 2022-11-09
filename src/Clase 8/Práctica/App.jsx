import { useState } from 'react'
import './App.css'
import Todoadded from './Clase 8/Práctica/Todoadded'
import Todolist from './Clase 8/Práctica/Todolist'


const App = () =>  {
  const [added, setAdded] = useState([])
  return (
    <>
      <Todolist setAdded={setAdded}/>
      <Todoadded added={added}/>
    </>
  )
}

export default App
