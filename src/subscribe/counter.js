import { Component } from "react";


class Counter extends Component{
    state={
        count:0
    }
    incrementCount=()=>{
        this.setState(
            {
                count:this.state.count + 1
            }
        )
    }
    DecrementCount=()=>{
        this.setState(
            {
                count:this.state.count - 1
            }
        )
    }
    ResetCount=()=>{
        this.setState(
            {
                count:0
            }
        )
    }
render(){
    return(
<>
<h1 className="heading1">counter example</h1>
<h3 className="heading2">count {this.state.count}</h3>
<button className="c1" onClick={this.incrementCount}>Increment Count</button>
<button className="c2"onClick={this.DecrementCount}>Decrement Count</button>
<button className="c3" onClick={this.ResetCount}>Reset Count</button>



</>
    )
}




}
export default Counter