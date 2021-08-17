import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { TodoState } from '../../types/todo';

const initialState: TodoState = {
     todoList : [
        {
            id: '1',
            title: 'Продажи',
            list: [
                {
                    checked: false,
                    text: 'Изучить JS'
                },
                {
                    checked: false,
                    text: 'Изучить JS'
                },
                {
                    checked: false,
                    text: 'Изучить JS'
                },
            ]
        },
        {
            id: '2',
            title: 'Фронтенд',
            list: [
                {
                    checked: false,
                    text: 'Что то про REACT'
                },
                {
                    checked: false,
                    text: 'Lorem'
                },
            ]
        }
    ]
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createCategory: (state, action:PayloadAction<string>) => {
            const item = {
                id: String(Date.now()),
                title: action.payload,
                list: []
            }
            state.todoList.push({...item})
        }
    }
})

export const {createCategory} = TodoSlice.actions

export default TodoSlice.reducer