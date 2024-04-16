import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import Login from '../../components/Login'

const LoginPage = () => {
  return (
    <>
    <div className="body-container">
      <h1 className="text-center pt-12 mb-16 text-black font-semibold text-3xl">Welcome to RC Chat (Real-time Chat Application) 🌎</h1>
      
        <Login/>
        <Link to="/chat">Chat</Link>

        </div>
    </>
  )
}

export default LoginPage