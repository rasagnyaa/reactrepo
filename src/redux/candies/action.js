


//Action creater:Action creator is a function which return the action
export const buyCandieAction=()=>{
    return {
type:"BUY_CANDIES",
quantity:1
    }
}
export const sellCandieAction=()=>{
    return {
type:"SELL_CANDIES",
quantity:1
    }
}