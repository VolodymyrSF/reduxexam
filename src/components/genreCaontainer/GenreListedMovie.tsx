import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {imgURL} from "../../urls";
import {useNavigate} from "react-router-dom";

interface IProps{
    movie:IMovie
}

const GenreListedMovie:FC<IProps> = ({movie}) => {
    const navigate=useNavigate()
    const {id,title,overview,release_date,poster_path}=movie
    return (
        <div onClick={()=>navigate(`movies/${id}`)}>
            <div>{title}</div>
            <div><img src={imgURL+poster_path} alt={title}/></div>
            <div>{overview}</div>
            <div>{release_date}</div>
        </div>
    );
};

export {GenreListedMovie};