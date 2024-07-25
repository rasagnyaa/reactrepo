import axios from "axios";

// export const   fetchProductAction=(data)=>{
// return{
//     type:"FETCH_PRODUCTS_SUCCESS",
//     payload:data,
// }

// }

export const fetchProductAction = () => {
  return async (dispatch) => {
    try {
      dispatch(ProductLoadingAction());
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status === 200) {
        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: data,
        });
      }
    } catch (err) {
      dispatch(fetchProductError());
    }
  };
};

export const ProductLoadingAction = () => {
  return {
    type: "FETCH_PRODUCTS_LOADING",
  };
};
export const fetchProductError = () => {
  return {
    type: "FETCH_PRODUCTS_ERROR",
  };
};
