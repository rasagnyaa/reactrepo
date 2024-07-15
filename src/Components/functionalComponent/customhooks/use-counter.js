

import { useState } from "react"

const useCounter=(initialValue,scale) =>{
const[value,setValue]=useState(initialValue,scale)
const incrementHandler=()=>{
    setValue(value+scale)
}
const decrementHandler=()=>{
    setValue(value-scale)
}
const resetHandler=()=>{
    setValue(0)
}
return [value,incrementHandler,decrementHandler,resetHandler]
}

export default useCounter