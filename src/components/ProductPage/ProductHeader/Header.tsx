import React from 'react'
import "./header.scss"


const Header = () => {
  return (
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
          <div className='shopping_card'>
            <img src="li_shopping-cart.svg" alt="" />
            <p>
              My Cart

              <span>
                $21
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
  )
}

export default Header