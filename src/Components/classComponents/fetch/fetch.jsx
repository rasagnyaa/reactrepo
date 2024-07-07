import axios from "axios";
// import CustomSpinnner from "../spinners/spinner";

const { Component } = require("react");



class ProductListing extends Component{
    state={
        productListing:[],
        loading:false,
        error:null
    }
    componentDidMount(){
       this.fetchData()
    }
    ///using fetch
  //   fetchData=()=>{
  //       this.setState({
  //           loading:true,
  //       })
  //       fetch("https://fakestoreapi.com/products")
        
  //       .then((response)=>response.json())
       
  //       .then((response)=>
  //       this.setState({
        
  //           productListing:response,
  //           loading:false
           

  //       })
    

  //   )
  //  }
//using async await
// fetchData=async()=>{
//     this.setState({
//         loading:true,
//     })
    
//   try{  const response1=await fetch("https://fakestoreapi.com/products")
//     const finalResponse=await response1.json();
//     this.setState({
//       productListing:finalResponse,
//       loading:false,

//     })
//   }catch(err){
//     console.error(err)
//     this.setState({
//         error:"server is busy"
//     })
//   }
// }
//using axios...important for react
fetchData=async()=>{
  this.setState({
      loading:true,
  })
  
try{const response1=await axios.get("https://dummyjson.com/recipes")
  console.log(response1)
     if(response1.status===200){
     this.setState({
    productListing:response1.recipes,
    loading:false,

  })
  }
}catch(err){
  console.error(err)
  this.setState({
      error:"server is busy"
  })
}
}
       render(){
        return(
         <>
          {this.state.productListing.map((eachRecipe)=>{
            return(
              <>
              <h2>{eachRecipe.name}</h2>
              </>
            )
          })}
         </>
        )
       }
      }
export default ProductListing