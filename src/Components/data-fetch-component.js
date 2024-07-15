//import { useState } from "react"
import useAxios from "./functionalComponent/customhooks/use-axios"


const DataFetch=()=>{
   const[data,error,loading]=useAxios()
   const[categories,categoryError,categoryLoading]=useAxios("https://fakestoreapi.com/products/categories")
   console.log(data,error,loading,"data-fetching component")
   if(loading && categoryLoading){
    return<h4>loading.....please wait</h4>
   }
   if(error && categoryError){
    return<h4>something went wrong pls try again later</h4>
   }



  return<>
  <h1>data fetch</h1>
  {
   data.map(each=>{
    return <>
    <h4>{each.title}</h4>
    </>
   })
  }
  <h2>category list</h2>
  {
    categories.map((each)=>{
        return<h4>{each}</h4>
    })
  }

  </>  
}
export default DataFetch
