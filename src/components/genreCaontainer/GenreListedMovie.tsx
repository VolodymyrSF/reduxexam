import React, {FC} from 'react';
import {IMovie} from "../../interfaces";

interface IProps{
    movie:IMovie
}

const GenreListedMovie:FC<IProps> = ({movie}) => {

    const {title,overview,release_date}=movie
    return (
        <div>
            <div>{title}</div>
            <div>{overview}</div>
            <div>{release_date}</div>
        </div>
    );
};

export {GenreListedMovie};