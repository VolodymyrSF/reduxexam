import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenres} from "../../interfaces/genreInterface";
import {genreService} from "../../services";
import {AxiosError} from "axios";
import {IMovie, IMovies} from "../../interfaces";

interface IState {
    genres:IGenre[]
    page:null|number
    movies:IMovie[]
}

const initialState:IState= {
    genres: [],
    page: null,
    movies:[]
}

const getAll=createAsyncThunk<IGenres,void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data}=await genreService.getAll()
            return data
        }catch (e){
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

const getById=createAsyncThunk<IMovies,{id:number,page:number}>(
    'genreSlice/getById',
    async ({id,page},{rejectWithValue})=>{
        try {
            const {data}=await genreService.getById(id,page)
            return data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }

)

const setPage = createAction<number>('genreSlice/setPage');


const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder.addCase(getAll.fulfilled,(state, action)=>{
            state.genres=action.payload.genres
        })
            .addCase(getById.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.page=action.payload.page
            })
            .addCase(setPage,(state, action)=>{
                state.page=action.payload
            })
});

const {reducer:genreReducer,actions}=genreSlice

const genreActions={
    ...actions,
    getAll,
    getById,
    setPage
}

export {
    genreReducer,
    genreActions
}