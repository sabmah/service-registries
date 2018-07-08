import ServiceModel from "../types/services/serviceModel"

class ServiceRecordApi{

    

    /* static fetchServiceRecords(){
        return fetch("http://navservicest/api/register/services"
        , {
            headers: new Headers({
                "clientId" : "DjWhoEHAYd",
                "Authorization" :"bearer perm:kocLtinWUCDnBXf4a6r1KmxRizpWLj8YENVxWgbcuOjFBgxA8SqCVtxEdlO25FRdMFfZVLLCtQoa66qQMv0Hrw=="
            })
        }
    )
        .then(response => {
            return response.json();
        })
        .then(payload => {
            return payload;
        });
    } */

    static fetchServiceRecords() : ServiceModel[]{
        var navigatorService : ServiceModel = {
            Id: 1,
            Name : "Navigator",
            IsActive : true,
            Description : "Navigator Micro-Service"
        }

        var pdxService : ServiceModel = {
            Id: 2,
            Name : "FLY PDX",
            IsActive : true,
            Description : "Fly PDX Micro-Service"

        }
        
        return [navigatorService,pdxService];
    }

    static addServiceRecord(newService: ServiceModel): ServiceModel {
        // Call Api to add new service here
        newService.Id = Math.random();
        // return new service with new Id 
        return newService;
    }

    static removeServiceRecord(id:number) : number {
        //Call Api to Delete service here

        return id;
    }
}

export default ServiceRecordApi;