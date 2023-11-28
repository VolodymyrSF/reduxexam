import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {Genre} from "./Genre";

const Genres = () => {

    const {genres}=useAppSelector(state => state.genre)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])
    return (
        <div>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};