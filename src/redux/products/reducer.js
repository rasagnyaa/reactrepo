const initialState = {
  products: [],
  loading: true,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_PRODUCTS_LOADING":
      return { ...state, loading: true };
    case "FETCH_PRODUCTS_ERROR":
      return { ...state, loading: false, error: "something went wrong" };
    default:
      return state;
  }
};
