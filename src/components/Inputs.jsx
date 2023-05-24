import React from 'react'
import Img from "../img/img.png"
import Attach from "../img/attach.png"

export const Inputs = () => {
  return (
    <div className='inputs'>
      <input type='text' placeholder='Type something ...'>
      </input>
      <div className='send'> 
      <img src={Attach}></img>
      <input type='file' style={{display:'none'}} id='file'></input>
      <label htmlfor="file">
        <img src={Img}></img>
      </label>
      <button>Send</button>

      </div>
    </div>
  )
}
