import React from 'react'
import LiveClock from '../Components/Clock';
export default function Header() {
  return (
    <div>
        <div className="navbar">
      <a className="Task Bender" href="/about">TaskBender</a>
      <a className="about-us" href="/about">About Us</a>
       <a className="logout" href="/">Logout</a>
      </div>
        <div className='clock'>
            <div className='clockp'>
             <p>Don't look here!🎶 You can do it!✔</p>
            </div>
            <LiveClock />
        </div>
    </div>
  )
}
