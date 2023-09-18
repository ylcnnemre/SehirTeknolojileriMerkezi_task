import React, { useMemo } from 'react'
import "./aboutus.scss"

interface Idata {
    title: string;
    desc: string
}

const AboutUs = () => {

    const contentData = useMemo((): Array<Idata> => {
        return [
            {
                title: "Mission",
                desc: "It makes people at ease and feel like they want to open up."
            },
            {
                title: "Motivation",
                desc: "The perfect mix of art that complements the room's style."
            },
            {
                title: "Vision",
                desc: "Along with a healthy dose of negative space to give the eyes spots to rest."
            },
            {
                title: "Copy",
                desc: "Art that has meaning to the people who live in the space,"
            }
        ]
    }, [])


    return (
        <section className='aboutus_container'>
            <div>
                <div className='left_side'>
                    <h3 className='title'>
                        About Us
                    </h3>
                    <p className='desc'>
                        Comfort is key and how you feel about your chair will affect how you feel and your mood.
                    </p>
                </div>
                <div className='right_side'>

                </div>
            </div>
            <div className='aboutus_content'>
                <div className='aboutus_content_left_side'>
                    {
                        contentData.map((item, index) => {
                            return (
                                <div className='content_item'>
                                    <h4>
                                        {index + 1}
                                    </h4>
                                    <h5>
                                        {
                                            item.title
                                        }
                                    </h5>
                                    <p>
                                        {
                                            item.desc
                                        }
                                    </p>
                                </div>
                            )
                        })
                    }


                </div>
                <div className='aboutus_content_right_side'>
                    <div className='left'>
                        <img src="img2.png" className='img2' alt="" />
                        <img src="img4.png" className='img4' alt="" />
                    </div>
                    <div className='right'>
                        <img src="img3.png" className='img3' alt="" />
                        <img src="img5.png" className='img5' alt="" />
                    </div>



                </div>
            </div>
        </section>
    )
}

export default AboutUs