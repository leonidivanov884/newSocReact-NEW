import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersState } from '../../types/users'



const initialState: UsersState  = {
    users: [
        {
            _id: '1',
            name: 'Jordan Peterson',
            ava: 'https://img.rt.com/files/2018.12/thumbnail/5c17b30bfc7e93c5438b4610.png',
            follow: false,
            followers: 130,
            groups: 10,
            info: {
                birthday: '14.01.1999',
                city: 'Ekaterenburg'
            },
            posts: [
                {
                    _id: '1',
                    text: 'Priority for residents of Brandenburg & Berlin, but also open to general public',
                    data: 'Aug 13',
                    likes: 132,
                    onLike: false,
                    view: 200
                },
                {
                    _id: '2',
                    text: 'Giga Berlin-Brandenburg county fair & factory tour on 9 October!',
                    data: 'Aug 13',
                    likes: 1200,
                    onLike: false,
                    view: 5159
                },
            ]
        },
        {
            _id: '2',
            name: 'Elon Mask',
            ava: 'https://pbs.twimg.com/media/C8BqGfMWkAUf9HP.jpg',
            follow: true,
            followers: 220,
            groups: 342,
            info: {
                birthday: '20.05.1981',
                city: 'Los Angeles'
            },
            posts: [
                {
                     _id: '1',
                    text: 'Winds are too high today. Looks like wind speed will be low enough to stack early tomorrow morning.',
                    data: 'Aug 6',
                    likes: 2035,
                    onLike: false,
                    view: 5410
                },
                {
                     _id: '2',
                    text: 'If you’re curious about Tesla, SpaceX & my general goings on, \n' +
                        '@WalterIsaacson is writing a biography',
                    data: 'Aug 2',
                    likes: 3489,
                    onLike: false,
                    view: 7550
                },
            ]
        }
    ],
    oneUser: {
        _id: '1',
        name: 'Jordan Peterson',
        ava: 'https://img.rt.com/files/2018.12/thumbnail/5c17b30bfc7e93c5438b4610.png',
        follow: false,
        followers: 130,
        groups: 10,
        info: {
            birthday: '14.01.1999',
            city: 'Ekaterenburg'
        },
        posts: [
            {
                 _id: '1',
                text: 'Priority for residents of Brandenburg & Berlin, but also open to general public',
                data: 'Aug 13',
                likes: 132,
                onLike: false,
                view: 200
            },
            {
                 _id: '2',
                text: 'Giga Berlin-Brandenburg county fair & factory tour on 9 October!',
                data: 'Aug 13',
                likes: 1200,
                onLike: false,
                view: 5159
            },
        ]
    },
}


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        followToggleOneUser: (state): void => {
            state.oneUser.follow = !state.oneUser.follow
        },

        followToggle: (state, action:PayloadAction<string>): void => {
            let user = state.users.find(user => user._id === action.payload)
            if (user){
                user.follow = !user.follow
            }
        },
        onLikeToggle: (state, action:PayloadAction<string>): void => {
            let posts = state.oneUser.posts.find(posts => posts._id === action.payload)
            if (posts && !posts.onLike){
                posts.likes += 1
                posts.onLike = !posts.onLike
            }else if (posts && posts.onLike) {
                posts.likes -= 1
                posts.onLike = !posts.onLike
            }
        }
    },
    extraReducers: {

    }
})

export const {followToggle, onLikeToggle, followToggleOneUser} = usersSlice.actions

export default usersSlice.reducer