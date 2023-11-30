import {createSlice} from "@reduxjs/toolkit";

const initialState={
    themeMode:'light'
}

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        changeTheme: (state) => {
            state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
        }
    }
});

const {reducer:themeReducer,actions}=themeSlice

const themeActions={
    ...actions
}

export {
    themeReducer,
    themeActions
}