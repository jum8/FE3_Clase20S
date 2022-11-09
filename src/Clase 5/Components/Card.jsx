import React from 'react'
import styles from '../Pages/Shop.module.css'

const shopStyles = {
  backgroundColor: 'purple', 
  padding: '20px', 
  marginBottom: 10, 
  borderRadius: 20
}

const Card = ({producto}) => {
  return (
    <div className={styles.card} style={shopStyles}>
        <img src={producto.imagen} alt="" className={styles.imagen} />
        <h2 className={styles.titulo}>{producto.id} - {producto.nombre}</h2>
        <h3 className={styles.precio}>{producto.precio}</h3>
    </div>
  )
}

export default Card