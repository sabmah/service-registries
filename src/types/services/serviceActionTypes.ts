
import * as typeKeys from "./actionTypeKeys"
import ServiceModel from "./serviceModel"
import ApiMetaData from "../common/ApiMetaData";

export interface ServiceFetchAction {
    type: typeKeys.fetchActionType;
    payload?: ServiceModel[];
    meta: ApiMetaData;
}

export interface ServiceAddAction {
    type:typeKeys.addActionType;
    payload: ServiceModel;
    meta: ApiMetaData;
}

export interface ServiceRemoveAction{
    type: typeKeys.removeActionType,
    payload: number,
    meta: ApiMetaData
}

export interface ToggleDescriptionAction{
    type: typeKeys.uiActionType
}


type ServiceActions = ServiceFetchAction | ServiceAddAction | ServiceRemoveAction | ToggleDescriptionAction ;

export default ServiceActions;






