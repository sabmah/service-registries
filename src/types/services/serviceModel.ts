
export default class ServiceModel{
    Id? : number = 0;
    Name: string;
    Description?: string;
    IsActive: boolean;
}


export class ServiceListItemProps{
    service:ServiceModel;
    //showDescription: boolean=false;
    //onHoverHandler: any;

}

export interface IStateProps{
    services: ServiceModel[]
}

export interface IDispatchProps{
    fetchServiceRecords : any,
    addServiceRecord: any,
    removeServiceRecord: any,
    toggleDescription: any
}

export type ServiceContainerProps = (IStateProps & IDispatchProps);



