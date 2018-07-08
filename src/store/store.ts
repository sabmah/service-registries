import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import loggerMiddleware from "../middlewares/loggerMiddleware";
import apiMiddleware from "../middlewares/apiMiddleware";

export default function configureStore(){
    return createStore(
        rootReducer,
        applyMiddleware(thunk, loggerMiddleware, apiMiddleware)
    )
}