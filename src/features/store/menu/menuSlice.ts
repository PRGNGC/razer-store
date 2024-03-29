import { createSlice } from '@reduxjs/toolkit'

export interface MenuState {
    value: boolean,
}

const initialState: MenuState = {
    value: false,
}

export const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuToggle: (state) => {
            state.value = !state.value;
        }
    },
})

export const { menuToggle } = menu.actions

export default menu.reducer