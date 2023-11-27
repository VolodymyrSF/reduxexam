import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "./Movie";
import {movieActions} from "../../redux";

const Movies = () => {
    const {page,movies}=useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[page])
    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};