import React, { useMemo } from 'react'
import "./header.scss"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()
  const headerLinks: Array<string> = useMemo(() => {
    return [
      "Home", "About", "Products", "Testimonial"
    ]
  }, [])

  return (
    <section className='header_container'>
      <img src="Logo.png" alt="" />

      <div className='header_links_wrapper' >
        {
          headerLinks.map((item, index) => {

            return (
              <a key={index} className='header_link' href={`#${item}`}  >
                {item}
              </a>
            )

          })
        }

      </div>
      <div className='header_right_wrapper'>
        <a className='contact_link' href='#contact' >
          Contact
        </a>
        <button onClick={()=>{navigate("/product")}} >
          Buy Online
        </button>
      </div>
    </section>
  )
}

export default Header