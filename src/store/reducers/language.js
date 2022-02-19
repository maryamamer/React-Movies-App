const INITIAL_STATE = {
  lang: "en",
  userPrefredLang: "fr",
  cart : ""
};

export function changeLanguageReducer(state = INITIAL_STATE, action) {
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
}


