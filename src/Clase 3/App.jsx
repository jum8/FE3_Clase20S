import './App.css'

const App = () =>  {
  let headers = ['Home', 'Shop', 'Contact', 'About']
  let users = [
    {id: 0, name: 'Vero', age: 49},
    {id: 1, name: 'Juan', age: 26 },
    {id: 2, name: 'Edu', age: 32 },
    {id: 3, name: 'fabio', age: 21},
  ]
  return (
    <div className="App">
      {headers.map((header, index) => <h3 key={index}>{header}</h3>)}
      {users.map((user) => <h2 key={user.id}> {user.name}</h2>)}
    </div>
  )
}

export default App
