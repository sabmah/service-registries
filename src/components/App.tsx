import * as React from "react";
import ServicesContainer from "./containers/ServicesContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IStateProps, IDispatchProps, ServiceListProps } from "../types/services/serviceModel";
import ServiceActionCreators from "../actions/serviceRecordActions";


class App extends React.Component<ServiceListProps>{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <ServicesContainer services = {...this.props.services}/>
    )
  }
}


function mapStateToProps(state:any): IStateProps{
  return {services: state.serviceRecords}
}

function mapDispatchToProps(dispatch:any): IDispatchProps{

  const dispatchProps : any = {
      fetchServiceRecords : ServiceActionCreators.fetchServiceRecords,
      addServiceRecord: ServiceActionCreators.addServiceRecord,
      removeServiceRecord: ServiceActionCreators.removeServiceRecord
  }

  return bindActionCreators(dispatchProps, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
