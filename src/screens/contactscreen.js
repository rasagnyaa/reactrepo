import React, { useContext } from 'react'
import Navbar from '../Components/functionalComponent/navbar/navbar'
import { Link, Outlet } from 'react-router-dom'
import { profileWrapper } from '../navigations/stack'


function ContactScreen() {
  const profileInfo=useContext(profileWrapper)
  const changeName=()=>{
    profileInfo.changeName("rasagnya")
    }
  return (
    <div>
        <Navbar/>
      <h1>Contact screen  {profileInfo.profileInfo.name}</h1>
      <button onClick={changeName}>Change name</button>
      <Link to={"doctors"}>doctor</Link>
      <Link to={"engineers"}>engineer</Link>
      <Outlet/>
    </div>
  )
}
export default ContactScreen
