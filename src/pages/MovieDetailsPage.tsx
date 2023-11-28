import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {MovieDetails} from "../components/movieDetailsContainer";
import {useParams} from "react-router-dom";

const MovieDetailsPage = () => {

    const movieDetails=useAppSelector(state => state.movies.movieDetails)
    const dispatch =useAppDispatch()

    const {id}=useParams()
    const movieID=parseInt(id)

    useEffect(()=>{
        dispatch(movieActions.getById({id:movieID}))
    },[movieID,dispatch])
    return (
        <div>
            {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};