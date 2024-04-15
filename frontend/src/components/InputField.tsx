import React, { useState } from 'react'

const InputField = () => {
  const [text, setText] = useState<string>('');

  return (
    <div>
        <input type="text" 
        value={text} 
        placeholder=""
        onChange={(e) => setText(e.target.value)}
        />
    </div>
  )
}

export default InputField