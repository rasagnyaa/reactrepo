import { useMemo, useState } from "react"



const UsememoPractise=()=>{
const[counter,setCounter]=useState(0)
const[dark,setDark]=useState(false)

const doubleNumber=useMemo(()=>{
    //console.log(doubleNumber,"doublenumber")
    return slowFunction(counter)
 
},[counter])

const ChangecountHandler=(e)=>{
    console.log("counter..changing")
    setCounter(Number(e.target.value))
}
const changeTheme=()=>{
    
    setDark(!dark)
 
}
  const Theme={
    backgroundColor:dark?"black":"white",
    color:dark?"white":"black",
  }



return<>

<div>
    <input type="number"id="counter"value={counter} onChange={ChangecountHandler}/>
</div>

<div>
    <button style={Theme} onClick={changeTheme}>Change theme</button>
</div>
<h2>number count : {counter}</h2>
</>


}
const slowFunction=(counter)=>{
console.log("slowfunction")
    for(let i=0;i<1000;i++){}
    return counter*2
    
    }
export default UsememoPractise