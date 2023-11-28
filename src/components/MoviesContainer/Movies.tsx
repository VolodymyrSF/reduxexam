import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "./Movie";
import {movieActions} from "../../redux";

const Movies = () => {
    const {page,movies}=useAppSelector(state => state.movies)
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
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            <button disabled={page===1} onClick={prevPage}>Prev Page</button>
            <div>Current Page:{page}</div>
            <button onClick={nextPage}>Next Page</button>
        </div>
    );
};

export {Movies};