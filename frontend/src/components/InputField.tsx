import React, { useState } from 'react'
import './InputField.css'

const InputField = () => {
  const [text, setText] = useState<string>('');

  return (
    <form id="form" action="" className="p-2 bg-yellow-900 w-full flex justify-center">
        <input type="text" id="form_input"
        value={text} 
        placeholder=""
        onChange={(e) => setText(e.target.value)}
        autoComplete='off'
        className="w-1/2 p-2 text-black border-2 rounded-xl outline-none"
        />
        <button className="bg-white ml-12 p-3 rounded-xl">
          Send</button>
    </form>
  )
}

export default InputField