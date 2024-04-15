import React, { useState } from 'react'
import InputField from '../../components/InputField'

const ChatPage = () => {

  const [messages, setMessages] = useState<string[]>([]) 

  return ( 
    <>
      <div className="mx-64">
      {messages.map((message, index) => {
        return <div key={index} className="text-black">{message}</div>
      })}
      </div>
      <InputField messages={messages} setMessages={setMessages}/>


    </>
  )
}

export default ChatPage