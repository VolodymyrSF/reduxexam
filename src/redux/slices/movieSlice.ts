import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";


interface IState{
    page:null|number
    movies:IMovie[]
}

const initialState:IState={
    page:null,
    movies:[]

}

const getAll=createAsyncThunk<IMovies,void>(
    'movieSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data}=await movieService.getAll(1)
            return data
        }catch (e){
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{}
})


const {reducer:movieReducer,actions} = movieSlice;

const movieActions={
    ...actions
}

export {
    movieReducer,
    movieActions
}
