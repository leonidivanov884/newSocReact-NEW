
export interface GroupsItemNews {
    id: string;
    title: string;
    img: string;
    text: string;
}
export interface GroupsItemProps {
    _id: string;
    name: string;
    users: number;
    slogan: string;
    logo: string;
    info?: string;
    banner?: string;
    news?: Array<GroupsItemNews>;
}


export interface IGroupOne {
    _id: string;
    logo: string;
    name: string;
    users: number;
    info: string;
    banner: string;
    slogan: string;
    news: Array<any>;
    subscribe: boolean;
    statusNews: string | null;
}

export interface GroupState {
    groups: Array<GroupsItemProps>;
    groupOne: IGroupOne ;
}