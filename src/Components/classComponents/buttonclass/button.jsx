import { Component } from "react";




class ButtonComponentClass extends Component{
    state={
        text1:"subscribe",
        text2:"subscribed",
        isSubscribe:false,

    }
subscribeHandler=()=>{
    //setState accepts 2 arguments 1.updater 2.callback Function
this.setState(
    {
        isSubscribe:!this.state.isSubscribe
    },()=>{

    })

}
   render(){
    return(
         <>
            <button onClick={this.subscribeHandler}>
            {this.state.isSubscribe ? 
            this.state.text2 
            : this.state.text1}
            </button>
        {
            this.state.isSubscribe?
            <h2>thanksss for subscribing enjoy the premium</h2>
            :
            <h2>please subscribe to access the content</h2>
        }





            </>
    )
   }

}
export default ButtonComponentClass
//render is required method in classcomp to insert jsx in the dom
//without render in classcomp we cant return jsx in dom
////////////////************************** 
//state -->  state is an object which holds the information or data of a particular component
//state can make dynamic websites
//state is private to a component
//state is mutable
//ti access the state in react class components we need to use "this" keyword
//there are 2 ways to create state in  react class based components
//1.object waqy of creation
//2.constructor way of creation
// to change the state we must use "setState" method
///////////////********************************** */
//example:
