import { combineReducers } from "redux";
import { changeLanguageReducer } from './language';
import { changeThemeMode } from './theme';

export default combineReducers({
    langugae : changeLanguageReducer,
    theme : changeThemeMode
})