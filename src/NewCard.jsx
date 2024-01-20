import React from 'react'

const NewCard = ({value}) => {
  return (
    <>
        <article className="new__card">
            <div className="new__data">
                <h2 className="new__title">{value.title}</h2>
                <p className="new__description">{value.description}</p>
            </div>
            
            <img src={value.imgSrc} alt="" className="new__img" />
        </article>      
    </>
  )
}

export default NewCard
