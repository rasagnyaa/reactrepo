

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
                    this.state.products.map(eachObject=>{
                        const{description,title,thumbnail,price}=eachObject
                        return(
                            <>
                            <div className="cards">
                                <h3>{title}</h3>
                                <h4>{description}</h4>
                                <img className="thumbnail"src={thumbnail} alt="title"width={200} height={200}/>
                                <h5 className="price">₹{price}</h5>
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