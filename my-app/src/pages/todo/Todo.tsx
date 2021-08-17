import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Link} from 'react-router-dom'
import { createCategory } from '../../redux/todo/todoSlice';
import {FiAlignLeft, IoSend} from 'react-icons/all'
import './todo.css'

interface ITodoMain {
    match: any
}

const colors = [
    '#FF6B6B',
    '#F5E8C7',
    '#FFBF86',
    '#368B85',
    '#986D8E',
    '#FF4C29',
    '#71EFA3',
]

function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
}

const Todo = ({match}: ITodoMain) => {
    const dispatch = useDispatch();
    const [inputCategoryVal, changeInputCategoryVal ] = useState('')
    const todoList = useSelector((state: RootState) => state.todo.todoList)
    const oneList = todoList.find(item => item.id === String(match.params.id))

    const onCreateCategory = () => {
        if (inputCategoryVal.length < 2){
            alert('Название категории должно быть больше')
            return
        }
        dispatch(createCategory(inputCategoryVal))
        changeInputCategoryVal('')
    }

    return (
        <div className="todo">
            <div className="todo__left">
                <Link className="todo__left-all" to={'/Todo/all'}>
                    <FiAlignLeft />
                    Все задачи
                </Link>
                <ul className="todo__left-titles">
                    {todoList.map(item =>
                        <li>
                            <Link className="flexLine" to={`/Todo/${item.id}`}>
                                <span className="todo__circle">
                                    {getRandomArbitrary(0, colors.length + 1)}
                                </span>
                                {item.title}
                                <span style={{marginLeft: '5px', fontSize:'14px'}}>
                                    ({item.list.length})
                                </span>
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="flexLine todo__left-add">
                    <input value={inputCategoryVal}
                           onChange={(e) => changeInputCategoryVal(e.target.value)} type="text"
                           placeholder={'Добавить новую категорию'}
                    />
                    <button onClick={() => onCreateCategory()} style={{marginLeft: 'auto'}}><IoSend /></button>
                </div>
            </div>
            <div className="todo__main">
                <h1>{oneList ? oneList.title : null}</h1>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Todo