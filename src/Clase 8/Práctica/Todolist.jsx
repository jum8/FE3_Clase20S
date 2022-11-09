import React, { useState } from 'react'

const Todolist = ({setAdded}) => {
   
    const todolist = [
        'Barrer la casa',
        'Preparar almuerzos de la semana',
        'Limpiar el baño',
        'Regar las plantas',
        'Comprar alimento para manchitas'
    ]
    
  return (
    <>
        <h1>Lista</h1>
        <ul>
            {todolist.map((item, index) => (
                <React.Fragment key={index}>
                    <li>{item}</li>
                    <button onClick={() => setAdded(prev => [...prev, item])}>Agregar tarea</button>
                </React.Fragment>
            ))}
        </ul>
    </>
  )
}

export default Todolist


//Tengo una lista. Hay que iterar la lista
//Cada elemento de la lista tiene un boton 
//La funcionalidad de ese boton es de guardar el elemento en un estado
//Ese estado que contiene una lista de elementos guardados hay que renderizarlo en otro componente