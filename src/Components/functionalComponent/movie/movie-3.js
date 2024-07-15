import { useEffect, useState } from "react"
import MovieViewsRealtime from "./movie-2"



function Example1(){
    const[views,setViews]=useState(0)
    useEffect(()=>{
       const id=setInterval(()=>{
        setViews((views)=>views+Math.floor(Math.random()*10))
       },1000)
       return()=>clearInterval(id)
    },[])
    return(
        <>
        <MovieViewsRealtime title="heat" views={views} releaseDate="December 15,1995"/>
      
        </>
    )
}
export default Example1