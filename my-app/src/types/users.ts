interface IUsersInfo {
    birthday: string
    city: string
}

interface IUsersPosts {
    _id: string;
    text: string;
    data: string;
    likes: number;
    onLike: boolean;
    view: number;
}

export interface IUsers {
    _id: string;
    name: string;
    ava: string;
    follow: boolean;
    followers: number;
    groups: number;
    info: IUsersInfo;
    posts: Array<IUsersPosts>
}

export interface UsersState {
    users: Array<IUsers>;
    oneUser: IUsers;
}