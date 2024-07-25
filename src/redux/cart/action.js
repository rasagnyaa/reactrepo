




export const addToCartAction=(selectedProduct)=>{
    return{
        type:"ADD_TO_CART",
        payload:selectedProduct,
    }
}

export const removeFromCartAction=(selectedId)=>{
    return{
        type:"REMOVE_FROM_CART",
        payload:selectedId,
    }
}