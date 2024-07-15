  import React from 'react'
import useCounter from './functionalComponent/customhooks/use-counter'
  
  function CounterExample() {
   const[count,incrementCount,decrementCount,resetCount]= useCounter(10,10)
   const[age,incrementAge,decrementAge,resetAge]=useCounter(100,1)
   const[salary,incrementSalary]=useCounter(10000,1000)
    return (
      <div>
        <h1>CounterExample</h1>
        <h2>count==={count}</h2>
        <h2>age==={age}</h2>
        <h2>salary==={salary}</h2>
        <button onClick={incrementCount}>increment count</button>
        <button onClick={incrementAge}>increment age</button>
        <button onClick={incrementSalary}>increment salary</button>
        <button onClick={resetCount}>reset</button>
       {/* <button onClick={incrementAge}>increment</button>
        <button onClick={decrementAge}>decrement</button>
        <button onClick={resetAge}>reset</button> */}
      </div>
    )
  }
  
  export default CounterExample
  