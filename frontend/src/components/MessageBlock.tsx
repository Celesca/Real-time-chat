import React from 'react'
import { Message } from '../models/Message'
import './MessageBlock.css'

const MessageBlock = (message: Message) => {
  return (
    <div className="message-container ml-16 my-4 p-1 flex">
        <img src="https://thicc-af.mywaifulist.moe/pending/waifus/GLvfI45WhoPWmidoq9vGtgF5FlchdpkXPI9YP1kB.jpg" alt="Avatar" className="avatar w-16"></img>
        <div className="ml-4 text_container flex-col justify-center items-center">
            <div className="header flex mt-1 items-center">
                <div className="font-bold text-lg">{message.user}</div>
                <div className="ml-4">{message.time}</div>
            </div>
            <div>{message.text}</div>
        </div>


    </div>
  )
}

export default MessageBlock