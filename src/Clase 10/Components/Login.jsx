import React, { useState } from 'react'

const Login = () => {
    const [Name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Name.length > 3){
            alert('Bien ahí')
            e.target.reset()
            setName('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        {Name}
        <label >Nombre</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/> 
        <label >Password</label>
        <input type="password" />
        <button>Submit</button>
    </form>
  )
}

export default Login