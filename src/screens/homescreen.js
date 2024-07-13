import React, { useState } from 'react'
import Navbar from '../Components/functionalComponent/navbar/navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../Components/functionalComponent/card/card'

function HomeScreen() {
  const[data,setData]=useState([])
  const fetchData = async()=>{
  const result= await axios.get("https://fakestoreapi.com/products")
if(result.status===200){

  setData(result.data)
 
}
}
const Buttonstyle={
width:"200",
height:"500",
border:"1px solid black",
 display:"inline-block",
}
  
  return (
    <div>
       
        <Navbar/>
      <h1>HomeScreen</h1>
      <button onClick={fetchData}>fetch data</button>
     {data.length>0?(
      <>
       {data.map((each,id)=>{
        return(
          <div key={id}>
            <Link to={`/${each.category}/${each.title}/info`}>
             <button style={Buttonstyle}>{each.title}
            </button>
            </Link>
            <Card  title={each.title}
                  description={each.description}
                  price={`$${each.price}`}
                  image={each.image}/>
         
         </div>
         )
       
    })}
    </>
     ):(<h2>no</h2>)}
      
      


    
    </div>
  )
}
export default  HomeScreen