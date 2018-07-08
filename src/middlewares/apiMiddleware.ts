
import {ApiType, ApiRecordTypes} from "../types/common/ApiMetaData"
import serviceRecordApi from "../api/serviceRecordApi";
import serviceActionKeys, {fetchActionType, addActionType, removeActionType} from "../types/services/actionTypeKeys";

const apiMiddleware = store => next => (action) => {

    if(!action.meta || action.meta.type !== ApiType.Api){
        return next(action);
    }

    let recordType : ApiRecordTypes = action.meta.recordType;
    let actionType : serviceActionKeys = action.type;

    switch(recordType){
        case ApiRecordTypes.SERVICES_API:

            switch(actionType){
                case fetchActionType.FETCH_SERVICES:
                    // Fetch and Create new action
                    
                    const newFetchAction = {...action, payload: serviceRecordApi.fetchServiceRecords()};

                    delete newFetchAction.meta;

                    // Dispatch the new action
                    return next(newFetchAction);
                
                case addActionType.ADD_SERVICE:
                    // Call Api to add service here
                    // and Create new action to dispatch
                    
                    const newAddAction = {...action, payload: serviceRecordApi.addServiceRecord(action.payload)};

                    delete newAddAction.meta;

                    // Dispatch the new action
                    return next(newAddAction);

                case removeActionType.REMOVE_SERVICE:
                    // Call Api to remove service here
                    const newRemoveAction = {...action, payload: serviceRecordApi.removeServiceRecord(action.payload)};

                    delete newRemoveAction.meta;

                    return next(newRemoveAction);
            }

            break;

        case ApiRecordTypes.RESOURCES_API:
            break;

        case ApiRecordTypes.VERSIONS_API:
            break;

        case ApiRecordTypes.ENDPOINTS_API:
            break;

        case ApiRecordTypes.VERBS_API:
            break;

        default:
            return next(action);
    }

    
}

export default apiMiddleware;