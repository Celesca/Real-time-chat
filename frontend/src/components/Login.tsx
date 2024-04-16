import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="form-container p-8">
        <form>
            <div className="flex flex-col justify-center items-center">
                <label className="text-center font-semibold text-2xl mb-4">Username</label>
                <input className="text-lg" type="text" id="username_input" placeholder="Enter your name" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 rounded w-64 mt-8">Enter the chat</button>
            </div>
        </form>
    </div>
  )
}

export default Login