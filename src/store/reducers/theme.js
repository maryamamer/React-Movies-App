export function changeThemeMode(state = "dark", action) {
  switch (action.type) {
    case "SET_THEME":
      // state.lang = action.payload xxxxx
      return action.payload;
    default:
      return state;
  }
}
