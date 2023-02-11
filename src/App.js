import React from "react";
import Cart from "./Cart";
import './index.css';
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from './Redux/Actions/CartActions'
import { useSelector } from "react-redux";

const App = () => {


  const dispatch = useDispatch();
  const cartValue = useSelector((state) => state.CartReducer);

  return (
    <>
      <Cart/>
      <div>
        <h1 className="text-2xl text-blue-600 font-bold">Add to cart</h1>
        <div className="flex flex-row gap-4">
          <button className="px-10 bg-lime-200 rounded-sm"
          onClick={() => dispatch(removeFromCart(1))}> - </button> 
          <span className="text-2xl font-semi
          ">{cartValue}</span>
           <button className="px-10 bg-lime-200 rounded-sm"
           onClick={() => dispatch(addToCart(1))}> + </button>
        </div>
      </div>
    </>
  );
};

export default App;
