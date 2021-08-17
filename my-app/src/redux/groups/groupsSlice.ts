import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {GroupState} from "../../types/groups";

const groupOneTemp: any = {
    _id: '',
    logo: '',
    name: '',
    users: 0,
    info: '',
    banner: '',
    slogan: '',
    news: [],
    subscribe: false,
    statusNews: null,
}

const initialState: GroupState = {
    groups : [],
    groupOne: {...groupOneTemp},
}

export const getGroupApi: any = createAsyncThunk(
    'group/getGroupApi',
    async () => {
        return axios.get('http://localhost:5000/group').then((res: any) => res.data)
    }
)

export const getGroupOneApi: any = createAsyncThunk(
    'group/getGroupOneApi',
    async (id: string) => {
        return axios.get(`http://localhost:5000/group/${id}`).then((res: any) => res.data)
    }
)
export const getGroupNewApi: any = createAsyncThunk(
    'group/getGroupNewApi',
    async ({id, skip }: any) => {
        return axios.get(`http://localhost:5000/group/news/${id}?limit=5&skip=${skip}`).then((res: any) => res.data)
    }
)
export const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        subscribeToggle: (state) => {
            state.groupOne.subscribe = !state.groupOne.subscribe;
        },
        clearOneGroup: (state) => {
            state.groupOne = {...groupOneTemp};
        }
    },
    extraReducers: {
        [getGroupApi.fulfilled]: (state, action) => {state.groups = action.payload; },
        [getGroupOneApi.fulfilled]: (state, action) => {
            state.groupOne = action.payload;
            state.groupOne.news = [];
            state.groupOne.subscribe = false
            state.groupOne.statusNews = null
        },
        [getGroupNewApi.pending]: (state) => {state.groupOne.statusNews = 'loading';},
        [getGroupNewApi.fulfilled]: (state, action) => {
            state.groupOne.news.push(...action.payload)
            state.groupOne.statusNews = null
            if ( !action.payload.length ){
                state.groupOne.statusNews = 'empty'
            }
        },
    }
})

export const {subscribeToggle, clearOneGroup} = groupSlice.actions

export default groupSlice.reducer