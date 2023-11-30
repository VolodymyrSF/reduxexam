import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";
import {IMovieDetails} from "../../interfaces";


interface IState{
    page:null|number
    movies:IMovie[]
    total_pages:number
    movieDetails:IMovieDetails
}

const initialState:IState={
    page:null,
    movies:[],
    total_pages:null,
    movieDetails:null

}

const getAll=createAsyncThunk<IMovies,{page:number}>(
    'movieSlice/getAll',
    async ({page},{rejectWithValue})=>{
        try {
            const {data}=await movieService.getAll(page)
            return data
        }catch (e){
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

const setPage = createAction<number>('movieSlice/setPage');



const getById=createAsyncThunk<IMovieDetails,{id:number}>(
    'movieSlice/getById',
    async ({id},{rejectWithValue})=>{
        try {
            const {data}=await movieService.getById(id)
            return data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
        state.movies=action.payload.results
                state.page=action.payload.page
                state.total_pages=action.payload.total_pages
        })
            .addCase(getById.fulfilled,(state, action)=>{
              state.movieDetails=action.payload
            })
            .addCase(setPage,(state, action)=>{
                state.page=action.payload
            })
})


const {reducer:movieReducer,actions} = movieSlice;

const movieActions={
    ...actions,
    getAll,
    getById,
    setPage
}

export {
    movieReducer,
    movieActions
}
