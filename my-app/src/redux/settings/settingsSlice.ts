import { createSlice } from '@reduxjs/toolkit'


export interface SettingsState {
    statusLeftPanel: boolean;
}

const initialState: SettingsState = {
    statusLeftPanel: false
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleStatusPanel: (state) => {
            state.statusLeftPanel = !state.statusLeftPanel
        }

    }
})

export const {toggleStatusPanel} = settingsSlice.actions

export default settingsSlice.reducer