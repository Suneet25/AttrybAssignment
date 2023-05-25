import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
let rootReducer=combineReducers({
    authManager:authReducer
})


export let store=legacy_createStore(rootReducer,applyMiddleware(thunk));
