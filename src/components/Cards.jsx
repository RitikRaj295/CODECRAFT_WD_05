import React from 'react'
import style from '../css/cards.module.css'

const Cards = (props) => {
  return (
  <div className={style.card}>

   <h3>{props.heading}</h3>
   <p>{props.data}</p>
   

  </div>
  )
}

export default Cards
