import React, { useState } from 'react'
import './InputField.css'
import { IoMdSend } from "react-icons/io";
import { Message } from '../models/Message';

interface Props {
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

const InputField = ({messages, setMessages} : Props) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') return;
    const newMessage: Message = {
      text: text,
      user: 'user',
      time: Date.now().toString()
    } 
    
    setMessages([...messages, newMessage]);
    setText('');
  }

  return (
    <form id="form" className="py-4 w-full flex justify-center" onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" id="form_input"
        value={text} 
        placeholder=""
        onChange={(e) => setText(e.target.value)}
        autoComplete='off'
        className="w-1/2 p-2 text-black border-2 rounded-xl outline-none text-lg"
        />
        <button className="bg-white ml-9 p-3 rounded-xl" type="submit">
          <IoMdSend size={30}/>
          </button>
    </form>
  )
}

export default InputField