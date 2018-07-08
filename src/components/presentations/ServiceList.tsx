import * as React from "react";
import { ServiceListProps} from "../../types/services/serviceModel";
import ServiceListItem from "../presentations/ServiceListItem";

class ServiceList extends React.Component<ServiceListProps> {
    
    constructor(props){
        super(props);

        this.state = {serviceId:0, showDescription:false};
    }

    render(){
        return (
            <ul>
                {
                    this.props.services.map((s) => (
                        <ServiceListItem 
                            key={s.service.Id}
                            service={s.service} 
                            showDescription={s.showDescription}
                        />
                    ))
                }
            </ul>
        )
    }
}


export default ServiceList;