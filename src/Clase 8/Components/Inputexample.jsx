import React, { useState } from 'react'

const Inputexample = () => {

  const [name, setName] = useState('')

  const handleChange = () => {
  }
  return (
    <div>
      <h1>Hola {name}</h1>
      <input type="text" placeholder='Acá escribí tu nombre' onChange={(event) => setName(event.target.value)}/>
    </div>
  )
}

export default Inputexample