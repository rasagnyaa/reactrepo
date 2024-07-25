import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { buyCandieAction, sellCandieAction } from "./redux/candies/action";
import { useEffect } from "react";
// import axios from "axios";
import {
  fetchProductAction,
  fetchProductError,
  ProductLoadingAction,
} from "./redux/products/action";
import { addToCartAction } from "./redux/cart/action";
//import { reduxStore } from './redux/store';

function App() {
  const candiesData = useSelector((reduxStore) => reduxStore.candies);
  const productsData = useSelector((reduxStore) => reduxStore.products);
  const cartData = useSelector((reduxStore) => reduxStore.cart.products);

  const dispatch = useDispatch();
  console.log(candiesData, "candiesData", productsData);
  const buyHandler = () => {
    dispatch(buyCandieAction());
  };
  const sellHandler = () => {
    dispatch(sellCandieAction());
  };
  useEffect(() => {
    // fetchData();
    // fetchProductAction()
    dispatch(fetchProductAction())
  }, []);

  // const fetchData = async () => {
  //   try {
  //     dispatch(ProductLoadingAction());
  //     const { status, data } = await axios.get(
  //       "https://fakestoreapi.com/products"
  //     );
  //     if (status === 200) {
  //       dispatch(fetchProductAction(data));
  //     }
  //   } catch (err) {
  //     dispatch(fetchProductError());
  //   }
  // };
  // console.log(candiesData, "candiesData");
  const addCartHandler = (eachProduct) => {
    const targetId = eachProduct.id;

    // Check if the product already exists in the cart
    const isExists = cartData.find(
      (eachProduct) => eachProduct.id === targetId
    );

    if (!isExists) {
      console.log("Adding product to cart:", eachProduct);
      dispatch(addToCartAction(eachProduct));
    } else {
      console.log("Product already exists in cart:", eachProduct);
      alert("Product already exists in the cart");
    }
  };

  return (
    <div className="App">
      <h4>{candiesData.candiesCount}</h4>
      <button onClick={buyHandler}>buy candies</button>
      <button onClick={sellHandler}>sell candies</button>
      {productsData.products.length > 0 ? (
        <>
          {productsData.products.map((each) => {
            return (
              <>
                <h4>{each.title}</h4>

                <button onClick={() => addCartHandler(each)}>
                  Add to cart
                </button>
              </>
            );
          })}
        </>
      ) : (
        <>
          <h3>bug</h3>
        </>
      )}
    </div>
  );
}

export default App;
//devTool extenion : for debugging the redux applications==>install
