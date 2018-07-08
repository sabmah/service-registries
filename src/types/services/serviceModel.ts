
export default class ServiceModel{
    Id? : number = 0;
    Name: string;
    Description?: string;
    IsActive: boolean;
}

export class ServiceListItemModel{
    service:ServiceModel;
    showDescription: boolean = false;

}

export interface IStateProps{
    services: ServiceListItemModel[]
}

export interface IDispatchProps{
    fetchServiceRecords : any,
    addServiceRecord: any,
    removeServiceRecord: any
}

export type ServiceListProps = (IStateProps & IDispatchProps);



