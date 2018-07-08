import * as typeKeys from "../types/services/actionTypeKeys"
import ServiceModel from "../types/services/serviceModel"
import { ServiceFetchAction, ServiceAddAction, ServiceRemoveAction }  from "../types/services/serviceActionTypes";
import ApiMetaData, { ApiType, ApiRecordTypes } from "../types/common/ApiMetaData";
import HttpMethods from "../types/common/HttpMethods";

const ServiceActionCreators = {
    
    fetchServiceRecords:  (): ServiceFetchAction => ({

        type : typeKeys.fetchActionType.FETCH_SERVICES,
        meta : {
            type : ApiType.Api, 
            recordType : ApiRecordTypes.SERVICES_API, 
            url: "", 
            method:HttpMethods.GET 
        }
    }),

    addServiceRecord: (service:ServiceModel) :ServiceAddAction =>(
        {
            type: typeKeys.addActionType.ADD_SERVICE,
            payload: service,
            meta: {
                type: ApiType.Api,
                recordType: ApiRecordTypes.SERVICES_API,
                url: "",
                method: HttpMethods.POST
            }
        }
    ),

    removeServiceRecord: (id: number) : ServiceRemoveAction => (
        {
            type: typeKeys.removeActionType.REMOVE_SERVICE,
            payload: id,
            meta:{
                type: ApiType.Api,
                recordType: ApiRecordTypes.SERVICES_API,
                url:"",
                method: HttpMethods.DELETE
            }
        }
    ) 
}

export default ServiceActionCreators; 

