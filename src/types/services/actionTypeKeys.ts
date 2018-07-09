
export enum fetchActionType{
    FETCH_SERVICES = "FETCH_SERVICES",
    FETCHING_SERVICES = "FETCHING_SERVICES" ,
    FETCH_SERVICES_ERROR = "FETCH_SERVICES_ERROR",
    FETCH_SEVICES_SUCCESS = "FETCH_SEVICES_SUCCESS",
}

export enum addActionType{
    ADD_SERVICE = "ADD_SERVICE",
    ADDING_SERVICE = "ADDING_SERVICE",
    ADD_SERVICE_ERROR = "ADD_SERVICE_ERROR",
    ADD_SERVICE_SUCCESS = "ADD_SERVICE_SUCCESS"
}

export enum removeActionType{
    REMOVE_SERVICE = "REMOVE_SERVICE"
}


type serviceActionTypes = fetchActionType 
| addActionType 
| removeActionType;

export default serviceActionTypes;
