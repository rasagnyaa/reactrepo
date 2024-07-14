import React, { useContext } from 'react'
import Navbar from '../Components/functionalComponent/navbar/navbar'
import { profileWrapper } from '../navigations/stack'
import addProfileHoc from '../hoc/profilehoc'

function SettingScreen(props) {

  const SharedData=useContext(profileWrapper)
  console.log(props,"in settings screen")
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
      <h3>good eveng {props.data.name}</h3>
    </div>
  )
}
export default addProfileHoc(SettingScreen)