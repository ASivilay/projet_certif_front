export interface MessagesInterface {
    id:number;
    content:string;
    datetime:string;
    users:[];
    channels:[];
};

export interface MessagesInterfaceTab extends Array<MessagesInterface> {}