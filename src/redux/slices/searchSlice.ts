import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../interfaces";
import {searchService} from "../../services/searchService";
import {AxiosError} from "axios";

interface IState{
    page:null|number
    movies:IMovie[]
    total_pages:number
}

const initialState:IState={
    page:null,
    movies:[],
    total_pages:null
}

const search=createAsyncThunk<IMovies,{page:number,query: string}>(
    'searchSlice/search',
    async ({query,page},{rejectWithValue})=>{
        try {
            const {data}=await searchService.getSearch({query,page})
            return data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

const setPage = createAction<number>('searchSlice/setPage');


const searchSlice = createSlice({
    name:'searchSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>builder
        .addCase(search.fulfilled,(state, action)=>{
            state.movies=action.payload.results
            state.page=action.payload.page
            state.total_pages=action.payload.total_pages

        })
        .addCase(setPage,(state, action)=>{
            state.page=action.payload
        })


});



const {reducer:searchReducer,actions}=searchSlice

const searchActions={
    ...actions,
    search,
    setPage
}

export {
    searchReducer,
    searchActions
}