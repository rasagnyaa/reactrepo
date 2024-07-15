

import React, { useCallback, useState } from 'react'
import ButtonCom from './button'

function UsecallbackEx() {
    const[age,setAge]=useState(10)
    const[salary,setSalary]=useState(10000)

    const ageHandler=useCallback(()=>{
        setAge(age+1)
    },[age])
    
    const salaryHandler=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    

  return (
    <div>
      <h3>hello</h3>
      <h3>age----{age}</h3>
    <h3>salary----{salary}</h3>
    <ButtonCom onPress={ageHandler} text={"increase age"}/>
  <ButtonCom onPress={salaryHandler} text={"increase salary"} />
    </div>
  )
}

export default UsecallbackEx
