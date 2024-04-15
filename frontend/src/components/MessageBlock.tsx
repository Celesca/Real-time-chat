import React from 'react'
import { Message } from '../models/Message'

const MessageBlock = (message: Message) => {
  return (
    <>
        <div>{message.text}</div>
        <div>{message.user}</div>
        <div>{message.time}</div>
    </>
  )
}

export default MessageBlock