import React from 'react'
import "./customerReview.scss"

const CustomerReview = () => {
    return (
        <div className='customer_container' id='Testimonial' >
            <h3 className='title'>
                What do customers say...
            </h3>
            <div className='content_wrapper'>
                <div className='img_container'>
                    <img src="reviewimg.png" alt="" />
                    <img src="star1.png" className='star' alt="" />
                </div>

                <div className='content'>
                    <img src="quote-up.png" alt="" />
                    <p className='title'>
                        Amazing service
                    </p>
                    <p className='desc'>
                        Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers.
                    </p >
                    <p className='who'>
                        Wade Warren
                    </p>
                    <p className='job'>
                        Doctor
                    </p>

                    <div className='arrows' >
                        <img src="arrow-circle-left.png" alt="" />
                        <img src="arrow-circle-right.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview