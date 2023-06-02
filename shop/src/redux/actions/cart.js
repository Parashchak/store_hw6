import { cartTypes } from "../types";

  export function addToBasket(data) {
    return {
      type: cartTypes.ADD_TO_BASKET,
      payload: data,
    };
  }
  
  export function addToBasketAsync(props) {
    const {cart, productId} = props;
    return async function (dispatch){
      let allBasket = [...cart];
      if (allBasket.includes(productId)){
        return alert("This product is already in your cart!")
      }
      allBasket.push(productId);
      localStorage.setItem("basket", JSON.stringify(allBasket));
      return dispatch(addToBasket(allBasket));
    }
  }
  
  export function delFromBasket(data) {
    return {
      type: cartTypes.DEL_FROM_BASKET,
      payload: data,
    };
  }
  
  export function delFromBasketAsync ({productId, cart}) {
    return async function (dispatch){
      let allBasket = [...cart];
      if (allBasket.includes(productId)){
        let newAllBasket = [];
        allBasket.forEach(el => {
          if (el !== productId) {
            newAllBasket.push(el)
          }
        })
        localStorage.setItem("basket", JSON.stringify(newAllBasket));
        return dispatch(delFromBasket(newAllBasket));
      }
  
    }
  }

  export function clearBasket(data){
    return {
      type: cartTypes.CLEAR_BASKET,
      payload: data,
    }
  }

  export function clearBasketAsync() {
    return async function (dispatch){
      const newBasket = [];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return dispatch(clearBasket(newBasket));
    }
  }