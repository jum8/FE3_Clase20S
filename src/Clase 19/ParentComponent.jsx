import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
import { useEstadosGlobales } from './Context'

const ParentComponent = () => {
  // const { salario } = useEstadosGlobales()
  return (
    <div className='parent'>
        <h1>ParentComponent</h1>
        <ChildComponent />
        {/* <p>Salario: {salario}</p> */}
        {console.log('Se renderizó el padre')}
    </div>
  )
}

export default ParentComponent