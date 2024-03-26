import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {useParams} from "react-router-dom";

import {GenreListedMovie} from "./GenreListedMovie";
import css from './GenreListedMovies.module.css'

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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const prevPage=()=>{
        dispatch(genreActions.setPage(page-1))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className={css.mainDiv}>
            {movies.map(movie=><GenreListedMovie key={movie.id} movie={movie}/>)}
            <div className={css.buttonDiv}>
            <button disabled={page===1} onClick={prevPage}>Prev Page</button>
            <div className={css.pageDiv}>Current Page:{page}</div>
            <button onClick={nextPage}>Next Page</button>
            </div>
        </div>
    );
};

export {GenreListedMovies};