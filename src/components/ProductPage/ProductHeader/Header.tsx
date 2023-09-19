import React, { useMemo, useState } from 'react'
import "./header.scss"
import { Button, Modal } from 'antd';
import { useSelector, useDispatch } from "react-redux"
import { IProductData } from '../../../models/ProductModel';
import { InputNumber } from 'antd';
import { Ibasket, addCount, descCount } from '../../../redux/Reducers';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch()
  const { product: { basket } } = useSelector((item: {
    product: {
      basket: Ibasket[]
    }
  }) => item)

  const TotalPrice = useMemo(() => {
    let sum: number = 0
    basket.forEach(item => {

      sum += item.count * item.price
    })

    return sum
  }, [basket])


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <header className='product_header'>
        <div className='product_header_container'>
          <img src="ebaylogo.png" alt="" className='ebaylogo' />

          <div className='search_field'>
            <div className='search_field_wrapper'>
              <p>
                All Categories

                <img src="arrow_down.svg" alt="" />
              </p>
              <input type="text" className='search_input' placeholder='Search For İtems' />
            </div>
            <button className='search_btn'>
              <img src="li_search.svg" alt="" />
            </button>
          </div>

          <div className='header_status'>

            <div className='favorites'>
              <img src="li_heart.png" alt="" />
              <p>
                Wishlist
              </p>
            </div>
            <div className='shopping_card' onClick={showModal} >
              <img src="li_shopping-cart.svg" alt="" />
              <p>
                My Cart

                <span>
                  {TotalPrice} $
                </span>
              </p>
            </div>
            <div className='profile_image'>
              <img src="profileimage.png" alt="" />
              <img src="arrow_down.svg" alt="" />
            </div>

            <button className='categories_button'>
              <img src="li_layout-grid.svg" alt="" />
              Brows All Categories
            </button>
          </div>


        </div>

      </header>
      <Modal width={800} title="My Cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
        {
          basket.length !== 0 ? basket.map((item, index) => {
            return (
              <div key={index} className='basket_item' >
                <img src={item.thumbnail} alt="" />
                <div className='model_content'>
                  <div className='model_header'>
                    <p>
                      <strong>Brand </strong>  :  {item.brand}
                    </p>
                    <p>
                      <strong>Model</strong> :  {item.title}
                    </p>
                    <p>
                      <strong>Price</strong> : {item.price} $
                    </p>
                  </div>
                  <div className='model_footer'>
                    <p className='count'>
                      <strong style={{ marginRight: "10px" }}>
                        Count :
                      </strong>
                      <span style={{ marginRight: "10px" }}>
                        {item.count}
                      </span>
                      <div className='arrowup' onClick={() => {
                        dispatch(addCount(item))
                      }} >
                        <img src="arrowup.svg" alt="" />
                      </div>
                      <div className='arrowdown' onClick={() => {
                        dispatch(descCount(item))
                      }} >
                        <img src="arrowdown.svg" alt="" />
                      </div>

                    </p>
                    <p style={{ display: "flex", alignItems: "center", fontSize: 20 }}>
                      <strong style={{ marginRight: 10 }}>
                        Total Price :
                      </strong>
                      <span >
                        {
                          item.price * item.count
                        } $
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )
          }) : (
            <h3 style={{ marginTop: 50 }}>
              Sepette Ürün Yok
            </h3>
          )

        }
        {
          basket.length !== 0 && (
            <h3 style={{textAlign:"end",backgroundColor:"#eee",padding:"5px 10px",width:"max-content",alignSelf:"flex-end",borderRadius:10,color:"black"}}>
              Total : {TotalPrice} $
            </h3>
          )
        }
      </Modal>
    </>

  )
}

export default Header