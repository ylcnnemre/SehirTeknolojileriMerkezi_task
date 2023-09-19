import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./similarproducts.scss"
import { IProductData } from '../../../models/ProductModel'
import { useNavigate } from "react-router-dom"

const SimilarProducts = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<Array<IProductData>>([])
    const navigate = useNavigate()

    const getProducts = async () => {
        setLoading(true)
        let response = await axios.get("https://dummyjson.com/products/category/smartphones")
        setProducts(response.data?.products)
        localStorage.setItem("allproducts", JSON.stringify(response.data.products))
        setLoading(false)

    }

    useEffect(() => {
        getProducts()
    }, [])


    if (loading) {
        return (
            <>
            </>
        )
    }


    return (
        <div className='similarproducts_container'>
            <h2 className='title'>
                Similar sponsored items
            </h2>

            <div className='content_wrapper'>

                {
                    products.map((item, index) => {

                        return (
                            <div key={index} className='prod_item' onClick={() => {
                                navigate(`/product?id=${item.id}`)
                              
                            }}  >
                                <img src={item.thumbnail} alt="" />
                                <p className='item_title'>
                                    {
                                        item.title
                                    }
                                </p>
                                <p className='brand'>
                                    {
                                        item.brand
                                    }
                                </p>
                                <div className='price_field'>
                                    <p className='price'>
                                        {item.price}$
                                    </p>
                                    <div className='item_rating'>
                                        <img src="review_star.svg" alt="" style={{ width: "30px", height: "30px" }} />
                                        <p>
                                            {
                                                parseFloat(item?.rating.toFixed(1) ?? "")
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        </div>
    )
}

export default SimilarProducts