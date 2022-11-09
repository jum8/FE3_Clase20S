import React, { useState } from 'react'

const FuncComponent = () =>{
    const [user, setUser] = useState({
        name: 'Sergio',
        count: 0,
    })
    return <>
        <h1>Function Component</h1>
        <h1>{user.count}</h1>
        <button onClick={() => setUser((prev) => ({...prev, count: prev.count + 1}))}>
            Sumar al contador
        </button>
        <h1>Hola {user.name}</h1>
        <button onClick={() => setUser({...user, name: 'Juanma'})}>No soy Sergio</button>
        {console.log(user)}
    </>
}

export default FuncComponent
