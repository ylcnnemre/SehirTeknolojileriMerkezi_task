import React from 'react'
import "./heroSection.scss"
const HeroSection = () => {
    return (
        <div className='hero_section_container'>
            <h1 className='hero_title'>
                Amazing furniture for  your home
            </h1>
            <p className='hero_describtion'>
                We think the chair is the most important piece of furniture in your home. Because if you love the chair you are sitting in chances are you will love the rest of the room.
            </p>
            <img src="Arrow.png" className='arrow_img' alt="" />
            <div className='search_area'>
                <input type="text" placeholder='Search Your Product' />
                <img src="search.svg" alt="" />
            </div>


            <img src="img1.png" className='back_img' alt="" />
        </div>
    )
}

export default HeroSection