import axios from "axios";
import { useEffect, useState } from "react";
import CardforUsers from "./cardforuses";
import CustomSpinnner2 from "../spinner/spinner";

const UserDetails=()=>{
const[data,setData]=useState([])
const[loader,setLoader]=useState(true)

useEffect(()=>{
    fetchData()
},[])

const fetchData=async()=>{
try{
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    
    console.log(response,"response")
    setData(response.data)
}catch(error){
    console.log(error,"error")
}finally{
    setLoader(false)
}
}


return(
   <center>

<h1 style={{fontFamily:"sans-serif"}}>Alumnus of Law College</h1>
{loader?(<CustomSpinnner2/>):(data.map((eachUser )=>{
return (
    <>
<CardforUsers key={eachUser.id}  details={eachUser}/>
    
    
    </>
    
    
    


    
)
}))

}
   </center>
)
}
export default UserDetails