
import ServiceRecordApi from "../../api/serviceRecordApi";
import ServiceModel from "../services/serviceModel";

// Usually used with server-side rendering
const initialState : ServiceModel[] = ServiceRecordApi.fetchServiceRecords();

export default {
    serviceRecords : initialState
}