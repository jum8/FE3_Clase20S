import React from 'react'
import Header from '../Components/Header'

const Home = (cualquiercosa) => {
    const texto = 'Este es el texto de bienvenida'
  return (
    <>
        <Header titulo='Home' text={texto}/>
    </>
  )
}

export default Home