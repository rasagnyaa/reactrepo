

import axios from "axios"
import CustomSpinner from "../../spinner/spinner";
const { Component } = require("react");



class ProductListing extends Component{
state={
    products:[]
}
componentDidMount(){
    this.fetchData()
}
fetchData=async()=>{
const result =await axios.get("https://dummyjson.com/products")
this.setState({
    products:result.data.products
})
}
deleteItem=(index)=>{
const newProducts=this.state.products.filter((eachObject,i)=>{
    return i!==index
})
this.setState({
    products:newProducts
})

}
render(){
    return(
        <>
        <h5 className="heading">product Listing</h5>
        {
            this.state.products.length>0
            ?
            <div className="productsList">
                <>
                {
                    this.state.products.map((eachObject,index)=>{
                        const{description,title,thumbnail,price}=eachObject
                        return(
                            <>
                            <div className="cards">
                            <img className="thumbnail"src={thumbnail} alt="title"width={200} height={200}/>
                                <h3 className="title">{title}</h3>
                                <h4 className="description">{description}</h4>
                                
                                <h5 className="price">₹{price}</h5>
                                <button className="dltbtn"onClick={()=>this.deleteItem(index)}>Delete</button>
                            </div>


                            </>
                        )
                    })
                }
                </> 
                </div>
                :
                <CustomSpinner/>
        }
        </>
    )
}
}
export default ProductListing