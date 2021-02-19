import {combineReducers, createStore, applyMiddleware} from "redux";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    "profile": authReducer
});

let store = createStore(reducers, {}, applyMiddleware(thunk));

store.subscribe(() => {
    //console.log(store.getState())
});

export default store;