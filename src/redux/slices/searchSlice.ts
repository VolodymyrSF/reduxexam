import {createAction, createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../interfaces";
import {searchService} from "../../services/searchService";
import {AxiosError} from "axios";

interface IState{
    page:null|number
    movies:IMovie[]
    trigger:boolean
}

const initialState:IState={
    page:null,
    movies:[],
    trigger:null
}

const search=createAsyncThunk<IMovies,{page:number,query: string}>(
    'searchSlice/search',
    async ({page,query=''},{rejectWithValue})=>{
        try {
            const {data}=await searchService.getSearch({page,query})
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
        })
        .addCase(setPage,(state, action)=>{
            state.page=action.payload
        })
        .addMatcher(isFulfilled(search),state => {
            state.trigger=!state.trigger
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