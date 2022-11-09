import React from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import productos from '../productos.json'




const Shop = () => {

  return (
    <>
        <Header titulo='Shop'/>
        {productos.map((producto) => (
          <Card key={producto.id} producto={producto}/>
        ))}
    </>
  )
}

export default Shop