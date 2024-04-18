import React, { useEffect, useRef, useState } from 'react'
import InputField from '../../components/InputField'
import { Message } from '../../models/Message'
import MessageBlock from '../../components/MessageBlock'
import { io, Socket } from 'socket.io-client';
import './ChatPage.css'

const SOCKET_SERVER_URL = 'http://localhost:3000';

const ChatPage: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    console.log("connected")
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // useEffect for listening to chat-message event

  useEffect(() => {
    if (!socket) return;

    socket.on('chat-message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('chat-message');
    };
  }, [socket]);

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
      <div className="mx-64 chat-container">
        {messages.map((message: Message, index: number) => {
          return <MessageBlock key={index} {...message}></MessageBlock>;
        })}
        {/* Ref to scroll to bottom */}
        <div ref={messagesEndRef}></div>
      </div>
      <InputField socket={socket}/>
    </>
  )
}

export default ChatPage