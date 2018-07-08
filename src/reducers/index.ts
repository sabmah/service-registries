import {combineReducers} from "redux";
import serviceRecordsReducer from "./serviceRecordsReducer";

const rootReducer = combineReducers({
    serviceRecords : serviceRecordsReducer
});

export default rootReducer;