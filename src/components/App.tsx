import * as React from "react";
import ServicesContainer from "./containers/ServicesContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IStateProps, IDispatchProps, ServiceContainerProps } from "../types/services/serviceModel";
import ServiceActionCreators from "../actions/serviceRecordActions";

class App extends React.Component<ServiceContainerProps>{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <ServicesContainer {...this.props} />
    )
  }
}


function mapStateToProps(state:any): IStateProps{
  return {
    services: state.serviceRecords
  }
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
