import { Component } from "react";

class TodosClassComponent extends Component {
  state = {
    todos: ["wake up at 7am", "eat breakfast", "go to school"],
  }
  toDoHandler=()=>{
    this.setState({
        todos:[...this.state.todos,"sleep at 9pm"]
    })
  }
  toUpdateHandler=(index)=>{
    let newTodos=this.state.todos;
    newTodos[index]="wake up at 10am"
    this.setState({
        todos:newTodos,
    })
  }
  toDeleteHandler=(index)=>{
  let newTodos=this.state.todos.filter((each,i) => index!==i)
  this.setState({
    todos:newTodos,
})
  }
  render() {
    return (
      <>
        <h1>List of Todos</h1>
        <ol>
          {this.state.todos.map((eachTodo,index) => {
            return (
            <>
            <li>{eachTodo}</li>
            
             <button onClick={()=>this.toUpdateHandler(index)}>Update</button>
             <button onClick={()=>this.toDeleteHandler(index)}>Delete</button></>
            )
          })}
        </ol>
        <button onClick={this.toDoHandler}>Add to do</button>
       
      </>
    );
  }
}
export default TodosClassComponent;
