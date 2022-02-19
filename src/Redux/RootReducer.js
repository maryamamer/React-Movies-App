import { combineReducers } from "redux";
import { MoviesReducer } from "./Fav Movie/MoviesReducer";
import { AllMoviesReducer } from "./Fav Movie/MoviesReducer" 

export default combineReducers({
  FavPage: MoviesReducer,
  movies: AllMoviesReducer,
});



