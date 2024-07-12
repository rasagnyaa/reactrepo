import React from 'react'
import { useNavigate } from 'react-router-dom'
//import Navbar from '../Components/functionalComponent/navbar/navbar'

function InvalidScreen() {
    const navigaten =useNavigate()
    const handleRedirection=()=>{
        const isRedirect=true
        if(isRedirect){
            navigaten("/")
        }else{

        }

    }
  return (
    <div>
        
      <h2>you have lost 404</h2>
      <button onClick={handleRedirection}>back to home</button>
    </div>
  )
}

export default InvalidScreen
