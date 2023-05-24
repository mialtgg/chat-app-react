import React from 'react'
import Kıymet from "../img/kıymet.jpeg"
import Esra from "../img/esra.jpeg"

export const Chats = () => {
  return (
    <div>
      <div className='userChat'>
        <img src={Esra} alt="" srcset="" />
        <div className='userChatInfo' >
          <span>Esra </span>
          <p>Holaa!</p>

        </div>




      </div>
      <div className='userChat'>
        <img src={Kıymet} alt="" srcset="" />
        <div className='userChatInfo' >
          <span> Kıymet </span>
          <p>Holaa!</p>

        </div>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/16839444/pexels-photo-16839444/free-photo-of-kisi-insanlar-kadin-yaz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
        <div className='userChatInfo' >
          <span> Aleyna </span>
          <p>Holaa!</p>

        </div>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/16839444/pexels-photo-16839444/free-photo-of-kisi-insanlar-kadin-yaz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
        <div className='userChatInfo' >
          <span> Zakire </span>
          <p>Holaa!</p>

        </div>
      </div>

    </div>
  )
}
