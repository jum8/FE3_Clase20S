import React from 'react'
import { useEstadosGlobales } from './Context'

const LoboEstepario = () => {
  const { salario } = useEstadosGlobales()
  return (
    <div className='lobo-estepario'>
        <img className='lobo' src='/lobo.png' alt='lobo'/>
        <h3>Total: {salario*6}</h3>
        {console.log('Se renderizó el lobo')}
    </div>
  )
} 

export default LoboEstepario