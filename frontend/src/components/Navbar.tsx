import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container navbar-container h-20 pl-4 text-center text-white flex items-center text-xl">
        <div className="flex items-center">
            <img src="https://www.kmutt.ac.th/wp-content/uploads/2020/09/KMUTT_CI_Semi_Logo-normal-full-1061x1200.png" className="w-16 cursor-pointer"></img>
            <span className="drop-shadow-md ml-4">RC Chat (Real-time Chat Application)</span>
        </div>
        <div className="flex items-center ml-auto pr-16 cursor-pointer">
            Welcome, Folk
        </div>
  </div>
  )
}

export default Navbar