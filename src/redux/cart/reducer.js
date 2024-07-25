const initialState = {
  products:[]

};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
    return { ...state,products:[...state.products, action.payload] };
    case "REMOVE_FROM_CART":
      const demoId=1
      const newFilterdData=state.products.filter((each)=>each.id !== demoId)
      return {...state,products:newFilterdData}
    default:
    return state;
  }
};
