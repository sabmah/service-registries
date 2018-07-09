import * as React from "react";
import { IStateProps } from "../../types/services/serviceModel";
import ServiceListItem from "../presentations/ServiceListItem";

class ServiceList extends React.Component<IStateProps> {
    
    render(){
        
        return (
            <ul>
                {
                    this.props.services.map((s) => (
                        <ServiceListItem 
                            key={s.Id}
                            service={s}
                        />
                    ))
                }
            </ul>
        )
    }
}


export default ServiceList;