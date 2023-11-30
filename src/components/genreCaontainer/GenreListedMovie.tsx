import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {imgURL} from "../../urls";
import css from './GenreListedMovie.module.css'
import StarRatings from "react-star-ratings";

interface IProps{
    movie:IMovie
}

const GenreListedMovie:FC<IProps> = ({movie}) => {
    const navigate=useNavigate()
    const {id,title,poster_path,vote_average}=movie
    return (
        <div className={css.oneMovieDiv} onClick={()=>navigate(`movies/${id}`)}>
            <div><img src={imgURL+poster_path} alt={title}/></div>
            <div className={css.titleDiv}>{title}</div>
            <StarRatings
                rating={vote_average/2}
                starDimension="20px"
                starRatedColor="orange"
            />
        </div>
    );
};

export {GenreListedMovie};