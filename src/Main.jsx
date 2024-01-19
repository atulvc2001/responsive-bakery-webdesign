import React from 'react'
import { RiMapPinLine, RiFacebookCircleLine, RiInstagramLine, RiYoutubeLine } from "@remixicon/react"
// import HOME_BG from "./images/home-bg.jpg";
// import BREAD_1 from "./images/bread-1.png"
// import HOME_BREAD from "./images/home-bread.png"
// import NEW_BREAD_1 from "./images/new-bread-1.png"
import "./Main.css"
import { useImage } from './ImageProvider';
// import IconStyleProvider from './IconStyleProvider';

const Main = () => {

    const [{imgList},dispatch] = useImage();
    const {HOME_BG,BREAD_1,HOME_BREAD,NEW_BREAD_1} = imgList;

  return (
    <>
    {/* Main */}
      <main className="main">
        
        {/* Home */}
        <section className="home section" id="home">
            <img src={HOME_BG} alt="image" className="home__bg" />
            <div className="home__shadow"></div>

            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">
                        Select The Best <br /> Quality Breads
                    </h1>

                    <a href="#" className="button">Select Breads</a>

                    <img src={BREAD_1} alt="image" className="home__bread" />
                </div>

                <div className="home__image">
                    <img src={HOME_BREAD} alt="image" className="home__img" />
                </div>

                <footer className="home__footer">
                    <div className="home__location">
                        <RiMapPinLine className='i' />
                        <span>AV, The Sun #321 <br /> Lima Peru</span>
                    </div>

                    <div className="home__social">
                
                        <a href="#" target='_blank'>
                            <RiFacebookCircleLine className='i'/>
                        </a>

                        <a href="#" target='_blank'>
                            <RiInstagramLine className='i'/>
                        </a>

                        <a href="#" target='_blank'>
                            <RiYoutubeLine className='i'/>
                        </a>
                    </div>
                </footer>

            </div>
        </section>

        {/* News */}
        <section className="new section" id="new">
            <h2 className="section__title">New Breads</h2>

            <div className="new__container container grid">
                <div className="new__content grid">

                    <article className="new__card">
                        <div className="new__data">
                            <h2 className="new__title">Rye Bread</h2>
                            <p className="new__description">Baked with healthy, gluten-free 
sourdough for good nutrition.</p>
                        </div>
                        
                        <img src={NEW_BREAD_1} alt="" className="new__img" />
                    </article>

                    <article className="new__card">
                        <div className="new__data">
                            <h2 className="new__title">Whole Grain Bread</h2>
                            <p className="new__description">Crispy and homemade prepared 
from organic yeast-free flour.</p>
                        </div>
                        
                        <img src={NEW_BREAD_1} alt="" className="new__img" />
                    </article>

                    <article className="new__card">
                        <div className="new__data">
                            <h2 className="new__title">Multigrain Bread</h2>
                            <p className="new__description">Tasty and made with different 
natural grains from the countryside.</p>
                        </div>
                        
                        <img src={NEW_BREAD_1} alt="" className="new__img" />
                    </article>
                </div>

                <a href="" className="new__button button">See More Breads</a>
            </div>
        </section>

        {/* About */}
        <section className="about section" id="about">
            <div className="about__container container grid">

            </div>
        </section>

        {/* Favourites */}
        <section className="favorite section" id="favorite">

        </section>

        {/* Visit */}
        <section className="visit section" id="visit">

        </section>
      </main>
    </>
  )
}

export default Main
