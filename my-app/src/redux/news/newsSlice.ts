import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {NewsState} from "../../types/news";



const newsOne = {
    _id: '',
    idAuthor: '',
    img: '',
    text: '',
    date: '',
}

const initialState: NewsState = {
    news : [],
    newsOne: {...newsOne},
    status: null,
    error: false,
}

export const getNewsApi: any = createAsyncThunk(
    'news/getNewsApi',
    async () => {
        return axios.get('http://localhost:5000/news').then((res: any) => res.data)
    }
)

export const getOneNewsApi: any = createAsyncThunk(
    'news/getOneNewsApi',
    async (_id: string | number) => {
        return axios.get(`http://localhost:5000/news/${_id}`).then((res: any) => res.data)
    }
)

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        clearOneNews: (state) => {
            state.newsOne = {...newsOne};
        }
    },
    extraReducers: {
        [getNewsApi.pending]: (state) => {
            state.status = 'loading';
            state.error = false;
        },
        [getNewsApi.fulfilled]: (state, action) => {
            state.status = null;
            state.news = action.payload;
            state.error = false;
        },
        [getOneNewsApi.fulfilled]: (state, action) => {
            state.newsOne = action.payload
        }
    }
})

export const {clearOneNews} = newsSlice.actions

export default newsSlice.reducer