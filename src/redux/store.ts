import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer} from "./slices";
import {searchReducer} from "./slices";
import {themeReducer} from "./slices/themeSlice";

const store=configureStore({
    reducer:{
        movies:movieReducer,
        genre:genreReducer,
        search:searchReducer,
        theme:themeReducer
    }
})

export {store}