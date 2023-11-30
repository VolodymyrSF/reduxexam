import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

import {Movie} from "./Movie";
import css from './Movies.module.css'

const Movies = () => {
    const {page,movies,total_pages}=useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(movieActions.getAll({page}))
    },[page,dispatch])
    const nextPage=()=>{
        dispatch(movieActions.setPage(page+1))
    }
    const prevPage=()=>{
        dispatch(movieActions.setPage(page-1))
    }

    return (
        <div className={css.mainDiv}>
            <h1>MOVIES</h1>
        <div className={css.bigDiv}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            <div className={css.buttonDiv}>
            <button disabled={page===1} onClick={prevPage}>Prev Page</button>
            <div className={css.pageDiv}>Current Page:{page}</div>
            <button disabled={page>total_pages} onClick={nextPage}>Next Page</button>
            </div>
        </div>
        </div>
    );
};

export {Movies};