
const initialState={
    candiesCount:100,
    eachCandiePrice:10

}
export const candiesReducers=(state=initialState,action)=>{
    switch(action.type){
        case "BUY_CANDIES" :
            return {...state,candiesCount:state.candiesCount+action.quantity};
       case "SELL_CANDIES" :
        return{...state,candiesCount:state.candiesCount-action.quantity};
        case "INCREASE_CANDIES_PRICE" :
        return {...state,eachCandiePrice:state.eachCandiePrice+1};
        default:
            return state
    }
}