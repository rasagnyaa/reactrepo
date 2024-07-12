import { useReducer } from "react"

const reducer=(state,action)=>{
switch(action.type){
 case "DELETE_TODO":
    const newTodo=state.todos.filter((eachTodo)=>{
        return eachTodo.id!==action.payload
    
    })
 return {
    ...state,
    todos:newTodo
 }
case "ADD_TODO":
return{
    ...state,
    todos:[
        ...state.todos,
    
    {
        id: state.todos.length + 1,
        period: state.newPeriod,
        routine: state.newRoutine.split(","),
      },
    ],
   newPeriod:"",
   newRoutine:"",
};
case "CHANGE_PERIOD":
return{
...state,
newPeriod:action.payload,
}
case "CHANGE_ROUTINE":
return{
...state,
newRoutine:action.payload,
}
default:
    return state;



}
}
const initialState={
todos:[],
newPeriod:"",
newRoutine:""
}

const User2=()=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const ChangePeriod=(e)=>{
        dispatch({
            type:"CHANGE_PERIOD",
            payload:e.target.value
        })
    }
    const ChangeRoutine=(e)=>{
        dispatch({
            type:"CHANGE_ROUTINE",
            payload:e.target.value
        })
    }
    const AddToDo=()=>{
        dispatch({
          type:"ADD_TODO"
        })
        
    }
    const DeleteHandler=(id)=>{
        dispatch({
           type:"DELETE_TODO",
           payload:id
        })
        
    }
    return(
      
        <div className="c1">
            <h1 id="heading">Todo's</h1>
       <input type="text"placeholder=" enter period"onChange={ChangePeriod} value={state.newPeriod} className="inp1"/>
       <input type="text"placeholder="enter routine"onChange={ChangeRoutine} value={state.newRoutine} className="inp2"/>
       <button id="btn1"
          onClick={AddToDo}
        
        >
          Add Todo
        </button>
        {
          <>
           {state.todos.map((eachTodo)=>{
            return (
                <div key={eachTodo.id}>
                <h1 id="h11">{eachTodo.period}</h1>

                <ul id="u11">
            {eachTodo.routine.map((each,index)=>{
            return (
                <>
                <li id="l11" key={index}>{each}</li>
                </>
            )
           })}
           </ul>
          <button id="btn2" 
            onClick={() => DeleteHandler(eachTodo.id)}
            >Delete Todo</button>
          
        
    






                </div>
            )
           })}
          
          </>

        }
        
        </div>
    )
}
export default User2