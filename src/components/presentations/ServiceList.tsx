import * as React from "react";
import { ServiceListProps } from "../../types/services/serviceModel";
import ServiceListItem from "../presentations/ServiceListItem";

class ServiceList extends React.Component<ServiceListProps> {
    
    render(){
        
        return (
            <ul>
                {
                    this.props.services.map((s) => (
                        <ServiceListItem 
                            key={s.Id}
                            service={s}
                            removeService={(id:number) => this.props.removeService(id)}
                        />
                    ))
                }
            </ul>
        )
    }
}


export default ServiceList;