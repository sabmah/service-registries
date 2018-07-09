
import * as React from "react";
import ServiceList from "../presentations/ServiceList";
import ServiceModel, { ServiceContainerProps } from "../../types/services/serviceModel";

class ServicesContainer extends React.Component<ServiceContainerProps>{


    addServiceHandler(newService:ServiceModel) : void{
        this.props.addServiceRecord(newService);
    }

    refetchServicesHandler(){
        this.props.fetchServiceRecords();
    }

    removeService(id:any){
        this.props.removeServiceRecord(id);
    }

    toggleDescriptionn(){
        
    }

    render(){
        
        return (
            <div>
                <h2>Services</h2>
                <button onClick={() =>this.addServiceHandler({Name:"New Service", Description:"new description", IsActive:true})}>Add</button>
                <button onClick={() => this.refetchServicesHandler()}>Re-Fetch</button>
                <ServiceList {...this.props}/>
            </div>
        )
    }
}

export default ServicesContainer;
