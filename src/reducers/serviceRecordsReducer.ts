import {Reducer} from "redux";
import initialState from "../types/common/initialServiceRecordState";
import * as types from "../types/services/actionTypeKeys";
import ServiceActions from "../types/services/serviceActionTypes";
import ServiceModel from "../types/services/serviceModel";

const serviceRecordsReducer: Reducer<ServiceModel[]> = (state:ServiceModel[] = initialState.serviceRecords, action:ServiceActions) =>{
    switch(action.type){
        case types.fetchActionType.FETCH_SERVICES:
            return action.payload;

        case types.addActionType.ADD_SERVICE:
            return [...state, action.payload];

        case types.removeActionType.REMOVE_SERVICE:
            let newServiceRecordState = [...state];
            let indexToRemove = newServiceRecordState.map( x => {return x.Id}).indexOf(action.payload);
            newServiceRecordState.splice(indexToRemove, 1);
            return newServiceRecordState;
            
        default:
            return state;
    }
}

export default serviceRecordsReducer;