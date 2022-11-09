import React, { useState } from 'react'
import styles from '../Pages/Shop.module.css'

const shopStyles = {
  backgroundColor: 'purple', 
  padding: '20px', 
  marginBottom: 10, 
  borderRadius: 20
}

const Card = ({producto, setCart}) => {

  const [stock, setStock] = useState(0)

  const {imagen, nombre, precio, id} = producto

  return (
    <div className={styles.card} style={shopStyles}>
        <img src={imagen} alt="" className={styles.imagen} />
        <h2 className={styles.titulo}>{id} - {nombre}</h2>
        <h3 className={styles.precio}>{precio}</h3>
        <section>
          <h4>
            <button onClick={() => setStock(stock + 1)}>+</button>
            {stock}
            <button disabled={stock === 0} onClick={() => setStock(stock - 1 )}>-</button>
          </h4>
        </section>
        <button onClick={() => setCart((prev) => {
          return [...prev, {...producto, stock}]
        })}> Agregar al carrito 🛒</button>
    </div>
  )
}

export default Card