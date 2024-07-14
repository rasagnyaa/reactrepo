import React, { useContext } from 'react'
import Navbar from '../Components/functionalComponent/navbar/navbar'
import { profileWrapper } from '../navigations/stack'

function SettingScreen() {
  const SharedData=useContext(profileWrapper)
  const incrementHandler=()=>{
    SharedData.incrementHandler()
  }
  const decrementHandler=()=>{
    SharedData.decrementHandler()
  }
  return (
    <div>
        <Navbar/>
      <h1>setting screen</h1>
      <h1>{SharedData.counter}</h1>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  )
}
export default SettingScreen