import HttpMethods from "./HttpMethods";

export enum ApiType{
    Api = "Api"
}

export enum ApiRecordTypes{
    SERVICES_API = "SERVICES_API",
    RESOURCES_API = "RESOURCES_API",
    VERSIONS_API = "VERSIONS_API",
    ENDPOINTS_API = "ENDPOINTS_API",
    VERBS_API = "VERBS_API",
    APPLICATIONS_API = "APPLICATIONS_API"
}

export default interface ApiMetaData{
    type:ApiType,
    recordType: ApiRecordTypes,
    url:string,
    method:HttpMethods,
    options?: any
}