import React from 'react'
import Header from '../../components/ProductPage/ProductHeader/Header'
import ProductDetails from '../../components/ProductPage/ProductDetails/ProductDetails'
import "./productPage.scss"
import SimilarProducts from '../../components/ProductPage/SimilarProducts/SimilarProducts'
import ProductFooter from '../../components/ProductPage/ProductFooter/ProductFooter'
const ProductPage = () => {
  return (
    <div>
      <Header />
      <ProductDetails />
      <SimilarProducts />
      <ProductFooter />
    </div>
  )
}

export default ProductPage