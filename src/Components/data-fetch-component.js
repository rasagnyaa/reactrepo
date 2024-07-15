import useAxios from "./functionalComponent/customhooks/use-axios"


const DataFetch=()=>{
   const[data,error,loading]=useAxios()
   console.log(data,error,loading,"data-fetching component")
   if(loading){
    return<h4>loading.....please wait</h4>
   }
   if(error){
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
  </>  
}
export default DataFetch
