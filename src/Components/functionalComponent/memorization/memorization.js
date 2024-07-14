


import React, { useState } from 'react'
import Heading1 from './heading'

function Memorization() {
    const[flag,setFlag]=useState(false)
  return (
    <>
      <Heading1/>
      <button onClick={()=>setFlag(!flag)}>flag change</button>
      {
        flag?<h2>flag is true</h2>:<h2>flag is false</h2>
      }
    </>
    
    

  )
}

export default Memorization
