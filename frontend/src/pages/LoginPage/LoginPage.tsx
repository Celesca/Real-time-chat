import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
      <h1 className="text-center mt-9 p-2 text-3xl">Welcome to RC Chat (Real-time Chat Application) </h1>
      
        <Link to="/chat">Chat</Link>


    </>
  )
}

export default LoginPage