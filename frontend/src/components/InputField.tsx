import React, { useState } from 'react'
import './InputField.css'
import { IoMdSend } from "react-icons/io";
import { Message } from '../models/Message';
import { Socket } from 'socket.io-client';

interface Props {
  socket: Socket | null
}

const InputField = ({socket} : Props) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') return;
    const newMessage: Message = {
      text: text,
      user: sessionStorage.getItem('username') || 'Unknown Cat',
      time: new Date().toLocaleTimeString()
    } 

    if (socket) {
      socket.emit('chat-message', newMessage);
    }
    setText('');
  }

  return (
    <form id="form" className="py-2 w-full flex justify-center" onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" id="form_input"
        value={text} 
        placeholder=""
        onChange={(e) => setText(e.target.value)}
        autoComplete='off'
        className="w-1/2 p-2 text-black border-2 rounded-xl outline-none text-lg mr-2"
        />
        <button className="bg-white ml-9 p-2 rounded-xl submit_btn" type="submit">
          <IoMdSend size={30}/>
          </button>
    </form>
  )
}

export default InputField