
import React, { useMemo, useState } from 'react'

function UsememoEx() {
    const[counter1,setCounter1]=useState(0)
    const[counter2,setCounter2]=useState(0)
    const[isLogin,setIsLogin]=useState(false)
    const counter1Handler=()=>{
       setCounter1(counter1+1) 
    }
    const counter2Handler=()=>{
        setCounter2(counter2+1) 
     }
     const isEven= useMemo(()=>{
    
        console.log("isEven")
        for(let i=0;i<1000;i++){}
        return counter1 % 2===0?"even":"odd"
     },[counter1])
 
  return (
    <div>
   <h3>even checker</h3>
    <h1>counte1 value === {counter1}={isEven}</h1>
    <h1>counte2 value === {counter2}</h1>
    <button onClick={counter1Handler}>increase 1</button>
    <button onClick={counter2Handler}>increase 2</button>
    <button onClick={()=>setIsLogin(!isLogin)}>change login</button>
    {isLogin?<h1>weclm</h1>:<h1>please</h1>}
    </div>
  )
}

export default UsememoEx
