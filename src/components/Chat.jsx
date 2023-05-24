import React from 'react'
import Add from "../img/addAvatar.png"
import More from "../img/more.png"
import Cam from "../img/cam.png"
import Messages from './Messages'
import { Inputs } from './Inputs'

export const Chat = () => {
  return (
    <div className='chat'>

      <div className="chatInfo">
        <span>Kıymet</span>
        <div className='chatIcons'>
          <img src={Cam} alt="" srcset="" />
          <img src={Add} alt="" srcset="" />
          <img src={More} alt="" srcset="" />

        </div>
      </div>
      <Messages/>
      <Inputs/>
    </div>
  )
}
export default Chat;