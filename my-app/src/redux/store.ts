import { configureStore } from '@reduxjs/toolkit'
import newsReducer from "./news/newsSlice";
import groupReducer from "./groups/groupsSlice";
import usersReducer from "./users/usersSlice";
import settingsReducer from "./settings/settingsSlice";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        news: newsReducer,
        group: groupReducer,
        users: usersReducer,
        todo: todoReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch