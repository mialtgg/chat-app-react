import React from 'react'
import Mine from "../img/mine.jpeg"


export default function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user'>
        </input>
      </div>
      <div className='userChat'>
        <img src={Mine} alt="" srcset="" />
        <span className='userChatInfo'> Mine </span>
       

      </div>
    </div>
  )
}
