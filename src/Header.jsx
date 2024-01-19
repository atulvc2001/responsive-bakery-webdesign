import React, { useEffect, useState } from 'react'
import { RiCloseLine, RiMenuFill} from "@remixicon/react"
import "./Header.css"
import BREAD_4 from "./images/bread-4.png";
import BREAD_1 from "./images/bread-1.png";


const Header = () => {

// * Show Item
    useEffect(() => {
        const navToggle = document.getElementById("nav-toggle");
        const navMenu = document.getElementById("nav-menu");
        const navClose = document.getElementById("nav-close");
    
        // Menu show
        if(navToggle){
            navToggle.addEventListener('click',() => {
                navMenu.classList.add('show-menu')
            })
        }
    
        // Menu hidden
        if(navClose){
            navClose.addEventListener('click',() => {
                navMenu.classList.remove('show-menu')
            })
        
        }
        // * Remove Menu Mobile
            const navLink = document.querySelectorAll('.nav__link');
        
            const linkAction = () => {
                const navMenu = document.getElementById('nav-menu')
                navMenu.classList.remove('show-menu')
            }
            navLink.forEach(n => n.addEventListener('click' , linkAction))


    },[])

    // * Add Blur Header

    const [scrollY, setScrollY] = useState(0)

    const blurHeader = () => {
        const header = document.getElementById("header");
        // Setting the scroll position using setScrollY
        setScrollY(window.scrollY)

        // ? When the scroll is greater than 50 viewport height, add the blur effect to the navbar
        if (scrollY > 50) {
            header.classList.add('blur-header');
        } else {
            header.classList.remove('blur-header');
        }
    };

    useEffect(() => {

        // Attach the event listener on component mount
        window.addEventListener('scroll', blurHeader);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', blurHeader)
        }
    }, [scrollY])


    // console.log(navLink)

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">Bakery</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">Home</a>
                    </li>

                    <li className="nav__item">
                        <a href="#news" className="nav__link">News</a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#about" className="nav__link">About Us</a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#favorite" className="nav__link">Favorites</a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#visit" className="nav__link">Location</a>
                    </li>
                </ul>


                {/* Close button */}
                <div className="nav__close" id="nav-close">
                    <RiCloseLine />
                </div>

                <img src={BREAD_4} alt="" className="nav__img-1" />
                <img src={BREAD_1} alt="" className="nav__img-2" />
            </div>

            {/* Toggle button */}
            <div className="nav__toggle" id="nav-toggle">
                <RiMenuFill />
            </div>

        </nav>
      </header>
    </>
  )
}

export default Header
