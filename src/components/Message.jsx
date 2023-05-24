import React from 'react'
import Mine from "../img/mine.jpeg"
import Kıymet from "../img/kıymet.jpeg"

export const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={Mine} alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Helloo</p>
        <img src={Kıymet}></img>



      </div>
    </div>
  )
}
