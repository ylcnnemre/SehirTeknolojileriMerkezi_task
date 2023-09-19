import React, { useEffect, useMemo, useState } from 'react'
import "./productdetails.scss"
import axios from 'axios'
import { IProductData } from '../../../models/ProductModel'
import { useSearchParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Spin } from "antd"
import { addProduct } from '../../../redux/Reducers'
import { toast } from "react-toastify"

const ProductDetails = () => {
  const [productData, setProductData] = useState<IProductData>()
  const [reviewCount, setReviewCount] = useState<number>()
  const [loading, setLoading] = useState<boolean>(false)

  const [searchParams] = useSearchParams()

  const alldata: any = useSelector(item => item)
  const dispatch = useDispatch()
  console.log("alldata ==>", alldata)
  const getProduct = async () => {
    try {
      const productId = searchParams.get("id")

      setLoading(true)
      let response = await axios.get(`https://dummyjson.com/products/${productId ?? 2}`)
      console.log(response.data)
      setProductData(response.data)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
      setLoading(false)
    }

  }

  useEffect(() => {
    getProduct()
    setReviewCount(randomNumberGenerator())
  }, [searchParams])


  function randomNumberGenerator() {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100
  }

  const featureList: Array<string> = useMemo(() => {
    return ["Free Return", "Chat with us 24 hours", "Comes with a Package"]
  }, [])



  const addToBasket = () => {

    dispatch(addProduct({
      ...productData,
      count: 1
    }))
  }

  const downloadJsonFile = () => {

    const veri = localStorage.getItem("allproducts")

    const blob = new Blob([veri ?? ""], { type: 'application/json' });
    const url = URL.createObjectURL(blob);


    const link = document.createElement('a');
    link.href = url;
    link.download = 'products.json';
    link.click();


    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "100px" }}>
        <Spin size='large' />
      </div>
    )
  }


  return (
    <section className='productDetail_container'>

      <div className='detailTop_comment'>

        <div className='left_side'>
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
        <button className='download_btn' onClick={() => {
          downloadJsonFile()
        }} >
          Download Json File from storage
        </button>
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
          <div className='star_review'>
            {
              Array.from({ length: 5 }).map((item, index) => {

                if (index < Math.floor(productData?.rating ?? 3)) {
                  return (
                    <img src="review_star.svg" className='star_icon' alt="" style={{ marginRight: "10px" }} />
                  )
                }
                return (
                  <img src="review_star.svg" className='star_icon gray_star' style={{ marginRight: "10px" }} alt="" />
                )

              })

            }
            <p className='rating_value'>
              {
                parseFloat(productData?.rating?.toFixed(1) ?? "")
              }
            </p>
            <p className='review_count'>
              from {reviewCount} Reviews
            </p>
          </div>
          <h3 className='phone_price'>
            <span>
              $
            </span>
            <span>
              {productData?.price}
            </span>
          </h3>
          {
            featureList.map((item, index) => {
              return (
                <div className='phone_features' key={index}>
                  <img src="check_mark.png" alt="" />
                  <p>
                    {item}
                  </p>
                </div>
              )
            })
          }
          <p className='sold_count'>
            {randomNumberGenerator()} Sold in the last 24 hours
          </p>
          <div className='product_buy_buttons'>
            <button className='buyitnow'>
              Buy it now
            </button>
            <button className='addtocard' onClick={() => {
              addToBasket()
              toast.success("Ürün sepete eklendi", {
                position: "top-right",
                autoClose: 2000,

              })
            }}>
              Add to Card
            </button>
          </div>
        </div>
      </div>

      <div className='product_images'>
        <div className='lefticon'>
          <img src="arrow_left.png" alt="" />
        </div>
        {
          productData?.images.map((item, index) => {
            return (
              <img src={item} alt="" className='product_img' />
            )
          })
        }
        <div className='lefticon'>
          <img src="arrow_right.png" alt="" />
        </div>
      </div>


    </section>
  )
}

export default ProductDetails