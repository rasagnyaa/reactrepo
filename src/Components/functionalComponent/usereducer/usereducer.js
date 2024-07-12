
import {useReducer} from "react"
//reducer function arg1(useReducer arguments)
const TodoReducer = (state, action) => {
    switch (action.type) {
      case "DELETE_TODO":
        const newTodo = state.initialState.filter((eachTodo) => {
          return eachTodo.id !== action.payload;
        });
        return {
          ...state,
          initialState: newTodo,
        };
  
      case "UPDATE_TODO":
        const updatedTodos = state.initialState.map((eachTodo) => {
          if (eachTodo.id === action.payload.id) {
            return {
              ...eachTodo,
              routine: action.payload.newRoutine,
            };
          }
          return eachTodo;
        });
        return {
          ...state,
          initialState: updatedTodos,
        };
  
      default:
        return state;
    }
  };

 

//arg2
const initialState = {
    initialState: [
      {
        id: 1,
        period: "Morning",
        routine: ["wake up at 8am", "breakfast at 10am", "sleep at 10pm"],
      },
      {
        id: 2,
        period: "Afternoon",
        routine: ["eat lunch at 1pm", "snacks at 4pm", "tuition at 6pm"],
      },
    ],
  };
     
  console.log(TodoReducer,initialState)
  //component starts from here
 
  const UseReducerEx=()=>{
    //dispatch is a function
//state is initialState
  const [state,dispatch] = useReducer(TodoReducer,initialState)
  //using dispatch to delete a todo
  const DeleteHandler =(id)=>{
    dispatch({
        type:"DELETE_TODO",
        payload:id
    })
      }
      //using dispatch to update a todo
    //   const UpdateHandler =(id,eachroutine)=>{
    //     const routine={
    //         routine:[{
    //             id:4,
    //             period:"eveng",
    //             routine:["hello"]
            
    //         }]
    //     }

        // dispatch({
        //     type:"UPDATE_TODO",
        //     payload:{id}
        // })
        //   }
return(
  <>
 <h1>useReducer example</h1>
{
    state.initialState.map((eachTodo,id)=>{
      
        return(
            <div key={eachTodo.id}>
          <h1>{eachTodo.period}</h1>
          {eachTodo.routine.map((eachTodo,index)=>
            <li key={index}>{eachTodo}</li>
        )}
         
          <button onClick={()=>DeleteHandler(eachTodo.id)}
              
              className="group relative  flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
            >Delete todo</button>
       <input
              type="text"
              value={state.newRoutine}
              onChange={UpdateHandler}
              placeholder="Enter new routine, comma-separated"
              className="mr-2 p-1 border"
            />
<button onClick={()=>UpdateHandler(eachTodo.id)}
              
              className="group relative  flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
            >Update todo</button>

            </div>
        )
    })
}
</>


)
}
export default  UseReducerEx