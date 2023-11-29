import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {imgURL} from "../../urls";

interface IProps{
    movie:IMovie
}
const SearchedMovies:FC<IProps> = ({movie}) => {
    const {title,overview,release_date,poster_path}=movie
    return (
        <div>
            <div>{title}</div>
            <div><img src={imgURL+poster_path} alt={title}/></div>
            <div>{overview}</div>
            <div>{release_date}</div>
        </div>
    );
};

export {SearchedMovies};