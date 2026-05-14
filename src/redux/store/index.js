import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favouriteReducer from "../reducers/favourite";
import jobReducer from "../reducers/job";

const bigReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: jobReducer,
});
const store = configureStore({
  reducer: bigReducer,
});

export default store;
