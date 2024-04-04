import { Component } from "react";



class ButtonComponent extends Component{
state={
    isSubscribe:false,
    text1:"subscribe",
    text2:"subscribed"
}
ChangeSubscribe=()=>{
    this.setState(
        {
            isSubscribe:!this.state.isSubscribe
        }
    )
}
render(){

return(
<div>
{ <button className="button1"style={{backgroundColor:this.state.isSubscribe?"green":"red"}}onClick={this.ChangeSubscribe}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button> }

{
    this.state.isSubscribe
    ?
    <h3 className="p1">wellcome user</h3>
    :
    <h3 className="p2">please subscribe to see the content</h3>
}



</div>



)
}





}
export default ButtonComponent