import React, { useState } from 'react'
import InputField from '../../components/InputField'
import { Message } from '../../models/Message'
import MessageBlock from '../../components/MessageBlock'

const ChatPage = () => {

  const [messages, setMessages] = useState<Message[]>([]) 

  return ( 
    <>
      <div className="mx-64">
      {messages.map((message: Message, index:number) => {
        return <MessageBlock key={index} {...message}></MessageBlock>
      })}
      </div>
      <InputField messages={messages} setMessages={setMessages}/>


    </>
  )
}

export default ChatPage