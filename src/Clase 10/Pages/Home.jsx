import React from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import productos from '../productos.json'

const Home = ({comprar}) => {
    const texto = 'Home'
  return (
    <div>
        <Header titulo={texto} descripcion='Esta es la ventana de incio'/>
        {productos.map((item) => <Card key={item.id} producto={item} comprar={comprar}/>)}
    </div>
  )
}

export default Home