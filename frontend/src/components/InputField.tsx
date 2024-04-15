import React, { useState } from 'react'
import './InputField.css'
import { IoMdSend } from "react-icons/io";

const InputField = () => {
  const [text, setText] = useState<string>('');

  return (
    <form id="form" action="" className="py-4 w-full flex justify-center">
        <input type="text" id="form_input"
        value={text} 
        placeholder=""
        onChange={(e) => setText(e.target.value)}
        autoComplete='off'
        className="w-1/2 p-2 text-black border-2 rounded-xl outline-none text-lg"
        />
        <button className="bg-white ml-9 p-3 rounded-xl">
          <IoMdSend size={30}/>
          </button>
    </form>
  )
}

export default InputField