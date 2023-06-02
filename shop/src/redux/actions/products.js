import { productTypes } from "../types";

export function getProducts(data) {
  return {
    type: productTypes.GET_PRODUCTS,
    payload: data,
  };
}

export function setLoading(data) {
   return {
    type: productTypes.SET_LOADING,
    payload: data,
  };
}
  
export function hasErr(err) {
  return {
    type: productTypes.HAS_ERR,
    payload: err,
  };
}
  

export function getProductsFetch (url) {
    return async function (dispatch) {
      dispatch(setLoading(true));
        await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          dispatch(setLoading(false));
          dispatch(getProducts(result));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          dispatch(hasErr(err));
        });
    };
}