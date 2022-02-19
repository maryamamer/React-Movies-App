/* eslint-disable default-case */
import * as actionTypes from "./MoviesTypes";

const INITIAL_STATE = [];

export const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAV:
      return {
        ...state, 
        action: action.payload};
    default:
      return state;
  }
};

export const AllMoviesReducer = (state = [] ,action) => {
  switch(action.type){
    case actionTypes.GET_ALL_MOVIES:
      return action.payload
    default:
      return state;
  }
}


/* const Initial_State= {
  lang: "en",
  userPrefredLang: "fr",
  cart : ""
};

export function changeLanguageReducer(state = Initial_State, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      // state.lang = action.payload xxxxx
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
} */
