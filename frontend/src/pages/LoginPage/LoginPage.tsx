import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../../components/InputField'

const LoginPage = () => {
  return (
    <>
        <Link to="/chat">Chat</Link>

      <InputField/>
    </>
  )
}

export default LoginPage