
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import ServiceActionCreators from "../../actions/serviceRecordActions";
import ServiceList from "../presentations/ServiceList";
import { IStateProps, IDispatchProps } from "../../types/services/serviceModel";


function mapStateToProps(state:any): IStateProps{
    return {services: state.serviceRecords.map(s =>({service: s, showDescription: false}))}
}

function mapDispatchToProps(dispatch:any): IDispatchProps{

    const dispatchProps : any = {
        fetchServiceRecords : ServiceActionCreators.fetchServiceRecords,
        addServiceRecord: ServiceActionCreators.addServiceRecord,
        removeServiceRecord: ServiceActionCreators.removeServiceRecord
    }

    return bindActionCreators(dispatchProps, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);

/* class ServicesContainer extends React.Component<Props>{

    constructor(props:any){
        super(props);
        this.state = {services : []};
    }

    addServiceHandler(newService:ServiceModel) : void{
        this.props.addServiceRecord(newService);
    }

    refetchServicesHandler(){
        this.props.fetchServiceRecords();
    }

    removeService(id:any){
        this.props.removeServiceRecord(id);
    }

    render(){
        const foo : IServiceListProps = {
            services: this.props.services.map(s => ({service:s, showDescription: false} as ServiceListItemModel))
        };

        return (
            <div>
                <h2>Services</h2>
                <button onClick={() =>this.addServiceHandler({Name:"New Service", Description:"new description", IsActive:true})}>Add</button>
                <button onClick={() => this.refetchServicesHandler()}>Re-Fetch</button>
                <ServiceList {...foo}/>
            </div>
        )
    }
} */
