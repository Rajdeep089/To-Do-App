import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";


//This code configures and exports the Redux store.
// It takes a single argument, an object with a reducer function,
// and uses it to create the Redux store. The reducer function is
// passed to the configureStore function from "@reduxjs/toolkit".
// The configureStore function returns a configured Redux store.
// The exported store is then returned from this module.
const store = configureStore({
  reducer: reducer,
});

export default store;
