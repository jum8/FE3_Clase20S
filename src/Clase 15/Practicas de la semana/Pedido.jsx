import React, { useEffect } from 'react'

const Pedido = ({producto}) => {
    useEffect(() => {
        console.log('El componente fue actualizado')
        return () => {
            console.log('El componente fue desmontado')
        }
    }, [producto])
  return (
    <div>
        <li>{producto}</li>
    </div>
  )
}

export default Pedido