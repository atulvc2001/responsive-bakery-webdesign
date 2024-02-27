import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const ScrollRevealCompo = () => {
  
    useEffect(() => {
        const sr = ScrollReveal({
            origin:'top',
            distance: '40px',
            opacity:1,
            scale:1.1,
            duration:2500,
            delay: 300,
            // reset:true, // Animations repeat
        });

        sr.reveal(`.home__data, .about_img, .about__data, .visit__data`)

        sr.reveal(`.home__image`, { rotate: {z: -15 } })
        sr.reveal(`.home__bread, .about__bread`, { rotate: {z: 15 } })
        sr.reveal(`.home__footer`, { scale:1, origin: 'bottom' })
        
        sr.reveal(`.new__card:nth-child(1) img`, { rotate: {z: -30 }, distance: 0 })
        sr.reveal(`.new__card:nth-child(2) img`, { rotate: {z: -15 }, distance: 0, delay: 600 })
        sr.reveal(`.new__card:nth-child(3) img`, { rotate: {z: -30 }, distance: 0, delay: 900 })
        
        sr.reveal(`.favorite__card img`, { interval: 100, rotate: {z: -30 }, distance: 0 })
        
        sr.reveal(`.footer__container`, { scale: 1 })
    })
    return null
}

export default ScrollRevealCompo
