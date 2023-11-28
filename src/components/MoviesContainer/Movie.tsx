import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {imgURL} from "../../urls";
import {useNavigate} from "react-router-dom";

interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {id,overview,title,poster_path}=movie
    const navigate=useNavigate()
    return (
        <div onClick={()=>navigate(`${id}`)}>
            <div> <img src={imgURL+poster_path} alt={title}/></div>
            <div>title:{title}</div>
            <div>overview:{overview}</div>
        </div>
    );
};

export {Movie};