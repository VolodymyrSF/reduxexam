import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer} from "./slices";
import {searchReducer} from "./slices/searchSlice";

const store=configureStore({
    reducer:{
        movies:movieReducer,
        genre:genreReducer,
        search:searchReducer
    }
})

export {store}