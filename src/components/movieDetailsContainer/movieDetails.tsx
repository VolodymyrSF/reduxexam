import React, {FC} from 'react';
import {IMovieDetails} from "../../interfaces/movieDetailsInterface";

interface IProps {
    movieDetails:IMovieDetails

}


const MovieDetails:FC<IProps> = ({movieDetails}) => {
    const {title,overview,release_date}=movieDetails
    return (
        <div>
            <div>{title}</div>
            <div>{overview}</div>
            <div>{release_date}</div>
        </div>
    );
};

export {MovieDetails};