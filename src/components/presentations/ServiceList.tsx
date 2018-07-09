import * as React from "react";
import { IStateProps } from "../../types/services/serviceModel";
import ServiceListItem from "../presentations/ServiceListItem";

class ServiceList extends React.Component<IStateProps,any> {
    
    constructor(props){
        super(props);

        this.state = {showDescription:false};
    }

    toggleDescription(){
                
        this.setState(prevState => ({showDescription: !prevState.showDescription}));
    }

    render(){
        
        return (
            <ul>
                {
                    this.props.services.map((s) => (
                        <ServiceListItem 
                            key={s.Id}
                            service={s} 
                            showDescription={this.state.showDescription}
                            onHoverHandler={() => this.toggleDescription()}
                        />
                    ))
                }
            </ul>
        )
    }
}


export default ServiceList;