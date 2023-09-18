import React, { useMemo } from 'react'
import "./header.scss"

const Header = () => {

  const headerLinks: Array<string> = useMemo(() => {
    return [
      "Home","About","Products","Testimonial"
    ]
  }, [])

  return (
    <div className='header_container'>
      <img src="Logo.png" alt="" />


    </div>
  )
}

export default Header