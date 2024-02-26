import React, { useEffect, useState } from "react";
import {
  RiMapPinLine,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiAddLine,
} from "@remixicon/react";
// import HOME_BG from "./images/home-bg.jpg";
// import BREAD_1 from "./images/bread-1.png"
// import HOME_BREAD from "./images/home-bread.png"
// import NEW_BREAD_1 from "./images/new-bread-1.png"
import "./Main.css";
import { useImage } from "./ImageProvider";
import FavoriteCard from "./FavoriteCard";
import NewCard from "./NewCard";
// import IconStyleProvider from './IconStyleProvider';

const Main = ({ scrollY, setScrollY, setActiveLink }) => {
  const [{ imgList }, dispatch] = useImage();

  const {
    HOME_BG,
    BREAD_1,
    HOME_BREAD,
    NEW_BREAD_1,
    BREAD_2,
    ABOUT_BREAD,
    FAVORITE_BREAD_1,
    FAVORITE_BREAD_2,
    FAVORITE_BREAD_3,
    FAVORITE_BREAD_4,
    FAVORITE_BREAD_5,
    FAVORITE_BREAD_6,
    VISIT_BG,
  } = imgList;

  

  const scrollActive = (sections) => {
    const scrollDown = scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id")
        // sectionsClass = document.querySelector(
        //   ".nav__menu a[href*=" + sectionId + "]"
        // );

      if (
        scrollDown > sectionTop &&
        scrollDown <= sectionTop + sectionHeight
      ) {
        console.log("hello")
        setActiveLink(sectionId)
        // sectionsClass.classList.add("active-link");
      } 
      // else {
      //   sectionsClass.classList.remove("active-link");
      // }
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id");

    window.addEventListener("scroll", scrollActive(sections));
  }, [scrollY, setActiveLink]);

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

              <a href="#" className="button">
                Select Breads
              </a>

              <img src={BREAD_1} alt="image" className="home__bread" />
            </div>

            <div className="home__image">
              <img src={HOME_BREAD} alt="image" className="home__img" />
            </div>

            <footer className="home__footer">
              <div className="home__location">
                <RiMapPinLine className="i" />
                <span>
                  AV, The Sun #321 <br /> Lima Peru
                </span>
              </div>

              <div className="home__social">
                <a href="#" target="_blank">
                  <RiFacebookCircleLine className="i" />
                </a>

                <a href="#" target="_blank">
                  <RiInstagramLine className="i" />
                </a>

                <a href="#" target="_blank">
                  <RiYoutubeLine className="i" />
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
              <NewCard
                value={{
                  title: "Rye Bread",
                  description:
                    "Baked with healthy, gluten-free sourdough for good nutrition.",
                  imgSrc: NEW_BREAD_1,
                }}
              />

              <NewCard
                value={{
                  title: "Whole Grain Bread",
                  description:
                    "Crispy and homemade prepared from organic yeast-free flour.",
                  imgSrc: NEW_BREAD_1,
                }}
              />

              <NewCard
                value={{
                  title: "Multigrain Bread",
                  description:
                    "Tasty and made with different natural grains from the countryside.",
                  imgSrc: NEW_BREAD_1,
                }}
              />
            </div>

            <a href="#" className="new__button button">
              See More Breads
            </a>
          </div>
        </section>

        {/* About */}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title">About Us</h2>

              <p className="about__description">
                We prepare all types of bread that are made at home, maintaining
                the tradition of using only the best ingredients made with local
                products whenever possible. We have an extensive line of freshly
                prepared bakery and coffee products.
              </p>

              <a href="#" className="button">
                Know More
              </a>

              <img src={BREAD_2} alt="image" className="about__bread" />
            </div>

            <img src={ABOUT_BREAD} alt="" className="about__img" />
          </div>
        </section>

        {/* Favourites */}
        <section className="favorite section" id="favorite">
          <h2 className="section__title">Customer Favorites</h2>

          <div className="favorite__container container grid">
            <FavoriteCard
              value={{
                imgSrc: FAVORITE_BREAD_1,
                title: "Whole Grain",
                subtitle: "Bread",
                price: "$6.00",
              }}
            />

            <FavoriteCard
              value={{
                imgSrc: FAVORITE_BREAD_2,
                title: "Rye",
                subtitle: "Bread",
                price: "$8.00",
              }}
            />

            <FavoriteCard
              value={{
                imgSrc: FAVORITE_BREAD_3,
                title: "Wheat",
                subtitle: "Bread",
                price: "$3.00",
              }}
            />

            <FavoriteCard
              value={{
                imgSrc: FAVORITE_BREAD_4,
                title: "Multigrain",
                subtitle: "Bread",
                price: "$5.00",
              }}
            />

            <FavoriteCard
              value={{
                imgSrc: FAVORITE_BREAD_5,
                title: "Sourdough",
                subtitle: "Bread",
                price: "$7.00",
              }}
            />

            <FavoriteCard
              value={{
                imgSrc: FAVORITE_BREAD_6,
                title: "French",
                subtitle: "Bread",
                price: "$3.00",
              }}
            />
          </div>
        </section>

        {/* Visit */}
        <section className="visit section" id="visit">
          <div className="visit__container">
            <img src={VISIT_BG} alt="image" className="visit__bg" />
            <div className="visit__shadow"></div>

            <div className="visit__content container grid">
              <div className="visit__data">
                <h2 className="section__title">Visit Us</h2>

                <p className="visit__description">
                  Discover the best bread, we look forward to your visit.
                </p>

                <a href="#" className="button">
                  See Location
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
