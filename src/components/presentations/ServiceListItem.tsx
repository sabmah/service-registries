import * as React from "react";
import {ServiceListItemModel} from "../../types/services/serviceModel";

// Stateless Component

const ServiceListItem = (props:ServiceListItemModel) => {
    return(
        <li 
            //onMouseEnter={() => props.toggleDescription(props.service.Id)} 
            //onMouseLeave={() => props.toggleDescription(props.service.Id)}
            >

            {props.service.Name} 
            
            <a href="#" >Remove</a>

            {props.showDescription &&
                <p > - {props.service.Description}</p> 
            }
            
        </li>
    )
}

export default ServiceListItem;

/* const ServiceList = (props: IServiceListUIProps) =>{
    return (
        <ul>
            {
                props.services.map((s) => {
                    
                    return (
                        <li key={s.service.Id} onMouseEnter={() => props.toggleDescription(s)} onMouseLeave={() => props.toggleDescription(s)}>
                            {s.service.Name} <a href="#" onClick={() => props.removeService(s.service.Id)}>Remove</a>

                            {s.showDescription &&
                                <p > - {s.service.Description}</p> 
                            }
                            
                        </li>
                    )
                })
            }
        </ul>
    )
} */

/* class ServiceList extends React.Component<IServiceListUIProps> {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // State is depending on the Prop!! is it good?
        this.props.services.map((s) => { this.state.ServiceListState.push({service: s, showDescription: false})});
    }

    toggleDescription(serviceListState: ServiceListUIModel){
        const arr = [...this.state.ServiceListState];

        arr.forEach(element => {
            if(element.service.Id === serviceListState.service.Id){
                element.showDescription = !element.showDescription
            }
        });
        
        this.setState({ServiceListState : arr})
    }

    render (){
        
        return (
            <ul>
                {
                    
                    this.state.ServiceListState.map((s) => {
                        
                        return (
                            <li key={s.service.Id} onMouseEnter={() => this.toggleDescription(s)} onMouseLeave={() => this.toggleDescription(s)}>
                                {s.service.Name} <a href="#" onClick={() => this.props.removeService(s.service.Id)}>Remove</a>

                                {s.showDescription &&
                                    <p > - {s.service.Description}</p> 
                                }
                                
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
} */

