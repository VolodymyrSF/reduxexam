import React from 'react';
import {useAppSelector} from "../../hooks";
import {Movie} from "./Movie";

const Movies = () => {
    const {page,movies}=useAppSelector(state => state.movies)
    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};