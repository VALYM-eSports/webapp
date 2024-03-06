import { createSlice } from "@reduxjs/toolkit";
import { GeneralInitialStateType } from "../types/generalType";





const initialState: GeneralInitialStateType = {
    isOpen: false
}

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setOpenTrue: (state) => {
            state.isOpen = true
        },
        setOpenFalse: (state) => {
            state.isOpen = false
        }
    }
})

export const { setOpenTrue, setOpenFalse } = generalSlice.actions
export default generalSlice.reducer