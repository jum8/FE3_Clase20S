import React from 'react'
import ProductDisc from '../Components/ProductDisc'

const ShopDashboard = ({titulo}) => {

  return (
    <>
        <h1>Bienvenidos al {titulo}</h1>
        <ProductDisc/>
    </>
  )
}

export default ShopDashboard
