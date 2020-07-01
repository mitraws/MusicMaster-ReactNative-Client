import { combineReducers } from "redux";
import song from "./song/reducer";
import user from "./user/reducer";

export default combineReducers({
  user,
  song
});
