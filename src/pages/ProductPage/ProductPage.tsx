import React from 'react'
import Header from '../../components/ProductPage/ProductHeader/Header'
import ProductDetails from '../../components/ProductPage/ProductDetails/ProductDetails'
import "./productPage.scss"
const ProductPage = () => {
  return (
    <div>
      <Header />
      <ProductDetails/>
    </div>
  )
}

export default ProductPage