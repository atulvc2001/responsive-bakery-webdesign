import React from 'react'
import { RiAddLine } from "@remixicon/react"

const FavoriteCard = ({value}) => {
    console.log(value?.subtitle)
  return (
    <>
      <article className="favorite__card">
                    <img src={value?.imgSrc} alt="" className="favorite__img" />

                    <div className="favorite__data">
                        <h2 className="favorite__title">{value?.title}</h2>
                        <span className="favorite__subtitle">{value?.subtitle}</span>
                        <h3 className="favorite__price">{value?.price}</h3>
                    </div>

                    <button className="favorite__button button">
                        <RiAddLine />
                    </button>
                </article>
    </>
  )
}

export default FavoriteCard
