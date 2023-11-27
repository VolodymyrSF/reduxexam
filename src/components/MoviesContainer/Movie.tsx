import React, {FC} from 'react';
import {IMovie} from "../../interfaces";

interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {id,overview,title}=movie

    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>overview:{overview}</div>
        </div>
    );
};

export {Movie};