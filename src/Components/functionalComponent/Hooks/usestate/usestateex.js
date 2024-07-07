import { useState } from "react";




const UseStateExample = () =>{
   const initialState=10;
   const [count,setCount] = useState(initialState)
const incrementHandler=()=>{
    setCount((count)=>
       count + 1
      )
     }
const decrementHandler=()=>{
    
    if(count>0){
    setCount((count)=>count-1)
    }
}
const resetHandler=()=>{
    setCount(0)
}
    return(
        <>
        <h1>{count}</h1>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={resetHandler}>reset</button>
        
        </>
    )
}
export default UseStateExample