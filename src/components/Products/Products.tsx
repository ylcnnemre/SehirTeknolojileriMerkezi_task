import React, { useMemo, useState } from 'react'
import "./product.scss"

interface IProduct {
  imgName: string
  name: string
  price: number
}

const Products = () => {
  const [selectedCategorie, setSelectedCategorie] = useState<number>(0)
  const categories: Array<string> = useMemo(() => {
    return ["All", "Chair", "Table", "Bed", "Closet", "Sofa", "Cabinet"]
  }, [])

  const productList = useMemo((): Array<IProduct> => {
    return [
      {
        "imgName": "product1.png",
        name: "Stool",
        price: 200
      },
      {
        imgName: "product2.png",
        name: "Tea Table",
        price: 150
      },
      {
        imgName: "product3.png",
        name: "Sofa - Light",
        price: 300
      },
      {
        imgName: "product4.png",
        name: "Sofa - Dark",
        price: 300
      },
      {
        imgName : "product5.png",
        name : "Table Lamp",
        price : 50
      },
      {
        imgName : "product6.png",
        name : "Chair",
        price : 200
      },
      {
        imgName : "product7.png",
        name : "Bedsite table",
        price : 100
      },
      {
        imgName : "product8.png",
        name : "Light Chair",
        price : 80
      }
    ]
  }, [])


  return (
    <div className='products_container' id='Products'>
      <h3 className='title'>
        Products
      </h3>
      <div>
        <ul className='categorie_list'>
          {
            categories.map((item, index) => {
              return (
                <li className='categorie_item' style={selectedCategorie == index ? { color: "#F66B0E" } : { color: "inherit" }} onClick={() => { setSelectedCategorie(index) }} >
                  {
                    item
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='product_list'>
        {
          productList.map((item, index) => {

            return (
              <div className='product_item'>
                  <img src={item.imgName} alt="" className='product_img' />
                  <div className='content'>
                     <p className='product_name'>
                       {
                        item.name
                       }
                     </p>
                     <div className='price_field'>
                        <p className='price'>
                          ${item.price}
                        </p>
                        <img src="arrow-right.svg" alt="" />
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

export default Products