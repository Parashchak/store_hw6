import { favTypes } from "../types";

export function toggleFav(data) {
    return {
      type: favTypes.TOGGLE_FAV,
      payload: data,
    };
  }
  
  export function toggleFavAsync(props) {
    const {fav, code} = props;
    return async function (dispatch){
      let allFav = [...fav];
    if (allFav.includes(code)){
      let newAllFaw = [];
      allFav.forEach(el => {
        if (el !== code) {
          newAllFaw.push(el)
        }
      })
      localStorage.setItem("fav", JSON.stringify(newAllFaw));
      return dispatch(toggleFav(newAllFaw));
    }
    allFav.push(code);
    localStorage.setItem("fav", JSON.stringify(allFav));
    return dispatch(toggleFav(allFav));

    }
  }