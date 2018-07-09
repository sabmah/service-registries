import * as React from "react";
import {ServiceListItemProps} from "../../types/services/serviceModel";

class ServiceListItem extends React.Component<ServiceListItemProps, any> {

    constructor(props){
        super(props);

        // only UI state changes
        this.state = {showDescription: false}
    }

    toggleDescription(){
        this.setState(prevState => ({showDescription: !prevState.showDescription}))
    }

    render(){
        return(
            <li 
                onMouseOver={() => this.toggleDescription()} 
                onMouseLeave={() => this.toggleDescription()}
                >
    
                {this.props.service.Name} 
                
                <a href="#" onClick={() => this.props.removeService(this.props.service.Id)}>Remove</a>
    
                {this.state.showDescription &&
                    <p > - {this.props.service.Description}</p> 
                }
                
            </li>
        )
    }
    
}

export default ServiceListItem;
