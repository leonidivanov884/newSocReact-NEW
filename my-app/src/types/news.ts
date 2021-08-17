export interface INewsItem {
    _id: number | string;
    img: string;
    title: string;
    date: string;
}

export interface INewsOne {
    _id: number | string;
    img: string;
    text: string;
    date: string;
    idAuthor: string;
}

export interface NewsState {
    news: Array<INewsItem>;
    newsOne: INewsOne | null;
    status: null | string;
    error: boolean;
}