import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {imgURL} from "../../urls";

interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {overview,title,poster_path}=movie
    return (
        <div>
            <div> <img src={imgURL+poster_path} alt={title}/></div>
            <div>title:{title}</div>
            <div>overview:{overview}</div>
        </div>
    );
};

export {Movie};