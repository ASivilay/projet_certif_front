export interface ChannelsInterface {
    id:number;
    name:string;
    modification:boolean;
    users?:[];
    messages?:[];
};

export interface ChannelsInterfaceTab extends Array<ChannelsInterface> {}


