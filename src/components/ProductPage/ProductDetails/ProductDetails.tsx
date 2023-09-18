import React, { useEffect, useState } from 'react'
import "./productdetails.scss"
import axios from 'axios'

interface IProductData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}


const ProductDetails = () => {
  const [productData, setProductData] = useState<IProductData>()
  const [loading, setLoading] = useState<boolean>(false)
  const getProduct = async () => {
    try {
      setLoading(true)
      let response = await axios.get('https://dummyjson.com/products/2')
      console.log(response.data)
      setProductData(response.data)
      setLoading(false)
    }
    catch (err) {
      setLoading(false)
    }

  }

  useEffect(() => {

    getProduct()

  }, [])


  if (loading) {
    return (
      <div>
        <h2>
          Loading
        </h2>
      </div>
    )
  }


  return (
    <section className='productDetail_container'>

      <div className='detailTop_comment'>

        <div className='left_icon'>
          <img src="arrow_left.png" alt="" />
        </div>
        <p className='desc'>
          Back to previous page | Listed in category: <span>Cell Phones & Accessories</span>
        </p>
        <p className='desc2'>
          Cell Phones & Smartphones
        </p>
      </div>

      <div className='product_content'>
        <img src={productData?.thumbnail} alt="" className='phone_img' />
        <div className='phone_detail'>
          <h2 className='phone_name'>
            <span className='phone_brand'>
              {
                productData?.brand
              }
            </span>
            <span>
              {
                productData?.title
              }
            </span>
          </h2>
          <p className='product_shipping'>
            Free 2 Days Shipping | 1 Year Warranty
          </p>
          <img src="review_star.svg" className='star_icon'   alt="" />
        </div>
      </div>


    </section>
  )
}

export default ProductDetails