
export default class ServiceModel{
    Id? : number = 0;
    Name: string;
    Description?: string;
    IsActive: boolean;
}

export class ServiceListItemProps{
    service:ServiceModel;
    removeService: (id:number) => void;
    //showDescription: boolean=false;
    //onHoverHandler: any;

}

export class ServiceListProps{
    services: ServiceModel[];
    removeService: (id:number) => void
}



export interface IStateProps{
    services: ServiceModel[]
}

export interface IDispatchProps{
    fetchServiceRecords : any,
    addServiceRecord: any,
    removeServiceRecord: any
}

export type ServiceContainerProps = (IStateProps & IDispatchProps);



