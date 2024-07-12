import React from 'react'
import Navbar from '../Components/functionalComponent/navbar/navbar'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <div>
       
        <Navbar/>
      <h1>HomeScreen</h1>
      {
        [1,2,3,4].map((each)=>{
            return(
                <Link to={`/hyderabad/${each}/info`}>
                 <button>{each}</button>
                </Link>
            
            )
        })
      }
    </div>
  )
}
export default  HomeScreen