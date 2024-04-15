import React, { useState } from 'react'
import InputField from '../../components/InputField'
import { Message } from '../../models/Message'

const ChatPage = () => {

  const [messages, setMessages] = useState<Message[]>([]) 

  return ( 
    <>
      <div className="mx-64">
      {messages.map((message, index) => {
        return <div key={index} className="text-black"></div>
      })}
      </div>
      <InputField messages={messages} setMessages={setMessages}/>


    </>
  )
}

export default ChatPage