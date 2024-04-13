const { Component } = require("react");


class Appy extends Component{
   
    
   state={
        fruit:"apple",
        price:1200,
        imageUrl:"https://subzfresh.com/wp-content/uploads/2022/04/apple_158989157-768x770.jpg",
        newFruit:["banana"],
ImgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/450px-Oranges_-_whole-halved-segment.jpg",
imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/330px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg"
    }
    ChangePrice=()=>{
        this.setState({
         price:this.state.price+300
        })
    }
    addImage=()=>{
        
        this.setState({
         imageUrl:this.state.ImgUrl,
         imgUrl:this.state.imgurl,
         
        })
    }
    deleteImage=()=>{
        
           const Fruit=this.state.newFruit.filter(()=>{
            return "banana"
        })
this.setState({
    imageUrl:Fruit
})
}

    render(){
    
        return(
            <>
            <div className="card">
     
               <h1>{this.state.fruit}</h1>
              
            <p>{this.state.price}</p>
            <img className="imgy"src={this.state.imageUrl}alt="imagedeleted"/> 
            <img className="imgy"src={this.state.ImgUrl}alt="imaged"/> 

<img className="imgy"src={this.state.imgurl} alt="img3"/>
         <button className="apple" onClick={this.ChangePrice}>updatePrice</button> 
         <button className="delete" onClick={this.deleteImage}>Delete</button> 
         <button className="add"onClick={this.addImage}>addImage</button>
         </div>
            </>
    
        )
    }
}
    
export default Appy