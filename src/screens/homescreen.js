// import React, { useState } from 'react'
 import { useContext } from 'react'
import Navbar from '../Components/functionalComponent/navbar/navbar'
import Useeffect2 from '../Components/functionalComponent/useeffect/useeffect2'
import { profileWrapper } from '../navigations/stack'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Card from '../Components/functionalComponent/card/card'
//import UseeffectEx1 from '../Components/functionalComponent/useeffect/useeffect'

function HomeScreen() {
  const sharedData=useContext(profileWrapper)


  const SharedData=useContext(profileWrapper)
  return (
    <div>
       
        <Navbar/>
      <h1>HomeScreen   {sharedData.profileInfo.name }  {sharedData.profileInfo.salary}</h1>
      <h4>{SharedData.counter}</h4>
      <Useeffect2/>


    
    </div>
  )
}
export default  HomeScreen