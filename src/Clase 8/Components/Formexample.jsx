import React, { useState } from 'react'

const Formexample = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    age: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    //validaciones
    if(user.name.length >= 4){
      alert(`tu nombre es: ${user.name}`)
    } else {
      alert('nombre invalido')
      errors.push('nombre invalido')
    }
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if(emailRegex.test(user.email)){
      alert('Te has registrado')
    } else {
      alert('Email invalido')
    }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
        <label>Password</label>
        <input type="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
        <label>Telefono</label>
        <input type="tel" onChange={(e) => setUser({...user, phone: e.target.value})} />
        <label>Edad</label>
        <input type="number" onChange={(e) => setUser({...user, age: e.target.value})} />
        <button>Registrarse</button>
      </form>

      <h3>Nombre: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Password: {user.password}</h3>
      <h3>Telefono: {user.phone}</h3>
      <h3>Edad: {user.age}</h3>
    </>
  )
}

export default Formexample