import React, { useEffect, useState } from 'react'
import { RiArrowUpLine } from "@remixicon/react"
import "./ScrollUp.css"

const ScrollUp = () => {

    const [scrollY,setScrollY] = useState();

    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up')
        setScrollY(window.scrollY);

        if (scrollY >= 350) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollUp)
    
        return () => {
            window.removeEventListener('scroll', scrollUp)
        }

    },[scrollY])

  return (
    <>
      <a href="#" className="scrollup" id="scroll-up">
        <RiArrowUpLine />
      </a>
    </>
  )
}

export default ScrollUp
