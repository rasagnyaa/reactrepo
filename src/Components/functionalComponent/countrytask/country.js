
import axios from "axios"
import React, { useEffect } from 'react'

const CountryListing =() =>{
    useEffect(()=>{
  fetchData()
    },[])
    const fetchData=async()=>{
        const response=await axios.get("")
        console.log("response",response)
    }
  return (
    <div>
      <h1>Country listing</h1>
    </div>
  )
}

export default CountryListing
