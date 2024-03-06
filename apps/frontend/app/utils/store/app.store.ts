import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./language.slice";
import generalSlice from "./general.slice";

const reducers = {
    language: languageSlice,
    general: generalSlice
}


const appStore = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof appStore.getState>
export default appStore