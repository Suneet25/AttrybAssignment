import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { carsReducer } from "./Cars/cars.reducer";
let rootReducer = combineReducers({
  authManager: authReducer,
  carsManager: carsReducer,
});

export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));
