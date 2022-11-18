import React, { useEffect, useState } from 'react'
import Pedido from './Pedido'

const Pedidos = () => {
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setProducto('Pizzas')
        }, 2000)
    }, [])
    
  return (
    <div>
        <h1>Su pedido: </h1>
        {producto && <Pedido producto={producto}/>}
        {/* {producto ? <Pedido producto={producto}/> : null} Esto es lo mismo que la linea 16 */}
        <button onClick={() => setProducto(null)}>Cancelar pedido</button>
    </div>
  )
}

export default Pedidos