export interface ITodoItem {
    checked: boolean;
    text: string;
}

export interface  ITodoListOnj {
    id: string;
    title: string;
    list: Array<ITodoItem>
}

export interface TodoState {
    todoList: Array<ITodoListOnj>;
}