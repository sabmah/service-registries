
import * as React from "react";
import ServiceList from "../presentations/ServiceList";
import ServiceModel, { ServiceContainerProps } from "../../types/services/serviceModel";

class ServicesContainer extends React.Component<ServiceContainerProps>{

    constructor(props){
        super(props);
    }

    addServiceHandler(newService:ServiceModel) : void{
        this.props.addServiceRecord(newService);
    }

    refetchServicesHandler(){
        this.props.fetchServiceRecords();
    }

    removeService(id:number){
        this.props.removeServiceRecord(id);
    }

    render(){
        
        return (
            <div>
                <h2>Services</h2>
                <button onClick={() =>this.addServiceHandler({Name:"New Service", Description:"new description", IsActive:true})}>Add</button>
                <button onClick={() => this.refetchServicesHandler()}>Re-Fetch</button>
                <ServiceList services={this.props.services} removeService={(id:number) => this.removeService(id)}/>
            </div>
        )
    }
}

export default ServicesContainer;
