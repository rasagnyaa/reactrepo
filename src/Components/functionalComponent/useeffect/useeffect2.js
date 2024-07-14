import React, { useEffect, useState } from 'react'
//import loggingComponent from '../../../hoc/logging,js'

function Useeffect2() {
const[count1,setCount1]=useState(0)
const[count2,setCount2]=useState(0)
useEffect(()=>{
console.log("useeffect executiong")
},[count1],[count2])

const countHandler1=()=>{
    setCount1(count1+1)
}
const countHandler2=()=>{
    setCount2(count2+1)
}
  return (
    <div>
      <h1>count1 = {count1}</h1>
      <button onClick={countHandler1}>increase countm 1</button>

      <h1>count2 = {count2}</h1>
      <button onClick={countHandler2}>increase countm 2</button>
    </div>
  )
}

export default Useeffect2
