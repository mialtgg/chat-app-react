import React from 'react'
import Mine from "../img/mine.jpeg"

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src={Mine}></img>
        <span >Mine</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
