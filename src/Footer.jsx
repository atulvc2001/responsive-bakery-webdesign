import React from 'react'
import { RiFacebookCircleLine,RiInstagramLine,RiYoutubeLine } from "@remixicon/react"
import { useImage } from './ImageProvider'
import "./Footer.css"

const Footer = () => {

    const [{ imgList }, dispatch] = useImage();
    const {BREAD_4, BREAD_3} = imgList;

  return (
    <>
      <footer className="footer">
        <div className="footer__container container grid">
            <div>
                <a href="#" className="footer logo">Bakery</a>
                <p className="footer__description">
                    We make the best bread <br /> in the city.
                </p>
            </div>

            <div className="footer__content grid">
                <div>
                    <h3 className="footer__title">Address</h3>

                    <ul className="footer__list">
                        <li>
                            <address className="footer__info"> AV. The Sun #321 <br /> Lima Peru</address>
                        </li>
                        
                        <li>
                            <address className="footer__info">9AM - 11PM</address>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">Contact Me</h3>

                    <ul className="footer__list">
                        <li>
                            <address className="footer__info">bakery@email.com</address>
                        </li>
                        
                        <li>
                            <address className="footer__info">+00 987 654 321</address>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">Follow Us</h3>

                    <div className="footer__social">
                        <a href="https://www.facebook.com/" target='_blank'>
                            <RiFacebookCircleLine />
                        </a>
                        
                        <a href="https://www.instagram.com/" target='_blank'>
                            <RiInstagramLine />
                        </a>
                        
                        <a href="https://www.youtube.com/" target='_blank'>
                            <RiYoutubeLine />
                        </a>
                    </div>
                </div>
            </div>

            <img src={BREAD_3} alt="image" className="footer__img-1" />
            <img src={BREAD_4} alt="image" className="footer__img-2" />
        </div>

        <span className="footer__copy">
        &#169; All Rights Reserved By Atul V Chandran
        </span>

      </footer>
    </>
  )
}

export default Footer
