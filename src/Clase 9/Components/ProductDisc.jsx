import React, { useState } from 'react'

const ProductDisc = () => {

    const [productSelected, setProductSelected] = useState()
    const [discount, setDiscount] = useState(1)

    let lista = [
        {id: 1, producto: 'Remera', precio: 2500},
        {id: 2, producto: 'Pelota', precio: 4000},
        {id: 3, producto: 'Jean', precio: 8000}
    ]
    const findProduct = lista.find(item => item.producto === productSelected ) 
  return (
    <div>
        {lista.map(item => <li key={item.id}>{item.producto} - {item.precio}</li>)}
        <form>
            <select onChange={(e) => setProductSelected(e.target.value)}>
                <option hidden>Producto</option>
                {lista.map(item => <option key={item.id} value={item.producto}>{item.producto}</option>)}
            </select>
            <select onChange={(e) => setDiscount(e.target.value)}>
                <option hidden>Seleccionar descuento</option>
                <option value={0.9}>10%</option>
                <option value={0.8}>20%</option>
                <option value={0.7}>30%</option>
            </select>
            <h3>Elemento seleccionado: {productSelected}</h3>
            {findProduct && findProduct.precio * discount}
        </form>
    </div>
  )
}

export default ProductDisc