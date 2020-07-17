import { combineReducers } from "redux";
import listReducer from './listReducers';


export default combineReducers({
  lists: listReducer
});