import React, { useEffect, useState } from 'react'

const FuncComponent = (props) =>{
    const [user, setUser] = useState({
        name: 'Sergio',
        count: 0,
    })

    useEffect(() => {
        console.log('Esto se ejecuta cuando se monta')
        setTimeout(() => {
            setUser(prev => {
                return {...prev, name: 'Agustin'}
            })
        }, 2000)
        return () => {
            console.log('El componente de función se desmontó')
        }
    }, [])

    useEffect(() => {
        console.log('Esto se ejecuta cuando el estado user se actualiza')
    }, [user])

    return <>
        <h1>Function Component</h1>
        <h1>{user.count}</h1>
        <button onClick={() => setUser((prev) => ({...prev, count: prev.count + 1}))}>
            Sumar al contador
        </button>
        <h1>Hola {user.name}</h1>
        <button onClick={() => setUser({...user, name: 'Juanma'})}>No soy Sergio</button>
    </>
}

export default FuncComponent
