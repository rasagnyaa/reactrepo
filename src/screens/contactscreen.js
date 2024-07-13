import React from 'react'
import Navbar from '../Components/functionalComponent/navbar/navbar'
import { Link, Outlet } from 'react-router-dom'

function ContactScreen() {
  return (
    <div>
        <Navbar/>
      <h1>Contact screen</h1>
      <Link to={"doctors"}>doctor</Link>
      <Link to={"engineers"}>engineer</Link>
      <Outlet/>
    </div>
  )
}
export default ContactScreen
