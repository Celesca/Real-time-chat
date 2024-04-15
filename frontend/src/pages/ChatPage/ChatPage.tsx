import React, { useEffect, useRef, useState } from 'react'
import InputField from '../../components/InputField'
import { Message } from '../../models/Message'
import MessageBlock from '../../components/MessageBlock'

const ChatPage = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages])

    // Function to scroll to the bottom of the messages container
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  

  return ( 
    <>
 <div className="mx-64" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        {messages.map((message: Message, index: number) => {
          return <MessageBlock key={index} {...message}></MessageBlock>;
        })}
        {/* Ref to scroll to bottom */}
        <div ref={messagesEndRef}></div>
      </div>
      <InputField messages={messages} setMessages={setMessages} />


    </>
  )
}

export default ChatPage