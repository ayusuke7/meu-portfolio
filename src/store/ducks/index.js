import { combineReducers } from "redux";

import { reducer as user } from "./user";
import { reducer as portfolio } from "./portfolio";

export default combineReducers({
  user,
  portfolio,
});
