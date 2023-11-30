import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {imgURL} from "../../urls";
import css from '../MoviesContainer/Movie.module.css'
import StarRatings from "react-star-ratings";
import {notFoundURL} from "../../urls/notFoundURL";
import {useNavigate} from "react-router-dom";

interface IProps{
    movie:IMovie
}
const SearchedMovies:FC<IProps> = ({movie}) => {
    const {id,poster_path,title,vote_average}=movie

    const navigate=useNavigate()
    return (
        <div className={css.mainDiv}>
            <div onClick={()=>navigate(`movies/${id}`)} className={css.movieDiv}>
                {poster_path?(
                    <img src={imgURL+poster_path} alt={title}/>
                ):(
                    <img src={notFoundURL} alt={'not found image'}/>
                )
                }
                <div className={css.titleDiv}>{title}</div>
                <StarRatings
                    rating={vote_average/2}
                    starDimension="20px"
                    starRatedColor="orange"
                />
            </div>
        </div>
    );
};

export {SearchedMovies};