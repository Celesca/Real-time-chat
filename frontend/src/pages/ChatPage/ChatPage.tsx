import React, { useEffect, useRef, useState } from 'react'
import InputField from '../../components/InputField'
import { Message } from '../../models/Message'
import MessageBlock from '../../components/MessageBlock'
import { io, Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:3001';

const ChatPage: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    console.log("connected")
    setSocket(newSocket);

    // Clean up the socket connection when component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    // Listen for incoming messages
    socket.on('chat-message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up event listeners when component unmounts
    return () => {
      socket.off('message');
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
 <div className="mx-64" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        {messages.map((message: Message, index: number) => {
          return <MessageBlock key={index} {...message}></MessageBlock>;
        })}
        {/* Ref to scroll to bottom */}
        <div ref={messagesEndRef}></div>
      </div>
      <InputField messages={messages} setMessages={setMessages} socket={socket}/>
    </>
  )
}

export default ChatPage