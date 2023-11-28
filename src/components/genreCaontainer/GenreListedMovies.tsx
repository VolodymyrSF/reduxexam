import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {useParams} from "react-router-dom";
import {GenreListedMovie} from "./GenreListedMovie";

const GenreListedMovies = () => {

    const {page,movies}=useAppSelector(state =>state.genre )
    const dispatch = useAppDispatch();
    const {id}=useParams()
    const genreID=parseInt(id)
    useEffect(()=>{
        dispatch(genreActions.getById({id:genreID,page}))
    },[page,genreID,dispatch])

    const nextPage=()=>{
        dispatch(genreActions.setPage(page+1))
    }
    const prevPage=()=>{
        dispatch(genreActions.setPage(page-1))
    }
    return (
        <div>
            {movies.map(movie=><GenreListedMovie key={movie.id} movie={movie}/>)}
            <button disabled={page===1} onClick={prevPage}>Prev Page</button>
            <div>Current Page:{page}</div>
            <button onClick={nextPage}>Next Page</button>
        </div>
    );
};

export {GenreListedMovies};