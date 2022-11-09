import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name.length > 3){
            alert('Bien ahí')
            e.target.reset()
            setName('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        {name}
        <label >Nombre</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/> 
        <label >Password</label>
        <input type="password" />
        <button>Submit</button>
    </form>
  )
}

export default Login