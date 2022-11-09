import './App.css'
import Child from './Clase 6/Child'
import Child2 from './Clase 6/Child2'
import Parent from './Clase 6/Parent'


const App = () =>  {
  const num = 150000
  return (
    <>
      <Parent>
        {(texto) => <Child texto={texto} numero={num}/>}
      </Parent>
      <Parent>
        {(texto) => <Child2 texto={texto}/>}
      </Parent>
    </>
  )
}

export default App
