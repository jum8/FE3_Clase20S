import React, { useState } from 'react'

const Card = ({producto, comprar}) => {
    const [total, setTotal] = useState(0)
    const {imagen, nombre, precio} = producto
    return (
        <>
            <h1>{nombre}</h1>
            <h3>{precio}</h3>
            <p>Stock en carrito: {total}</p>
            <button onClick={() => {
                comprar()
                setTotal(total + 1)
            }}> Comprar</button>
        </>
    )
}

export default Card