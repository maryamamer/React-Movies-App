import * as actionTypes from "./MoviesTypes";
import axios from "axios";

export const addToFav = (payload) => {
  return {
    type: actionTypes.ADD_TO_FAV,
    payload
  };
};

export const removeFromFav = (payload) => {
  return {
    type: actionTypes.REMOVE_FROM_FAV,
    payload
  };
};

export const allMovies = () => (dispatch) => {
  return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d3c9a114cf901c5b09616a68970ac918")
  .then((res) => dispatch({
    type: actionTypes.GET_ALL_MOVIES,
    payload: res.data.results,
  }));
};
/* export const setLanguage = (payload) => {
  return {
    type: actionTypes.setLanguage,
    payload ,
  };
}; */
