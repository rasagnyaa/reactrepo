import React from "react"



const Heading1=(prop)=>{
    console.log("hai heading re-rendering..")
    const {title="guest"}=prop
    return<h1>{title}</h1>
}
export default React.memo(Heading1)