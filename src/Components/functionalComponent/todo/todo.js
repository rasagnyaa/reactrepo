import { useState } from "react";

const TodoComponent = () => {
  const initialState = [
    {
      id: 1,
      period: "Morning",
      routine: ["wake up ta 8am", "brkfast at 10am", "sleep at 10pm"],
    },
    {
      id: 2,
      period: "afternoon",
      routine: ["eat lunch at 1pm", "snacks at 4pm", "tution at 6pm"],
    },
  ];
  const addTodoHandler = () => {
    const dummyTodo = {
      id: 3,
      period: "eveng",
      routine: ["bath", "study", "insta"],
    };
    const dummyIncludes = todos.find(
      (eachTodo) => eachTodo.id === dummyTodo.id
    );
//////////
    const UpdatedTodos = [...todos, dummyTodo];
    if (!dummyIncludes) {
      setTodos(UpdatedTodos);
    }
  };
 //////////
  const [todos, setTodos] = useState(initialState);
  const removeRoutineHandler = (each) => {
    const id = each.id;
    const filterdData = todos.filter((eachTodo) => eachTodo.id !== id);
    setTodos(filterdData);
  };
  //////////
  const removeallHandler=(each)=>{
    const id = each.id;
    const filterdData = todos.filter((eachTodo) => eachTodo.id === id);
    setTodos(filterdData);
  }
  return (
    <>
      {todos.map((each) => {
        return (
          <>
            <h3>{each.period}</h3>
            <button onClick={() => removeRoutineHandler(each)}>
              removeRoutine
            </button>
            {each.routine.map((eachRoutine) => {
              return (
                <>
                  <p>{eachRoutine}</p>
                </>
              );
            })}
          </>
        );
      })}
      <button onClick={addTodoHandler}>Add to do</button>
      <button onClick={removeallHandler}>removeall</button>
    </>
  );
};
export default TodoComponent;
