import React, {FC} from 'react';

import {IMovieDetails} from "../../interfaces";
import {imgURL} from "../../urls";
import {notFoundURL} from "../../urls/notFoundURL";
import StarRatings from "react-star-ratings";
import {ProductionCompanies} from "./ProductionCompanies";
import {SpokenLanguages} from "./SpokenLanguages";
import css from './MovieDetails.module.css'
import {GenresMovieNames} from "../genreCaontainer";

interface IProps {
    movieDetails:IMovieDetails

}


const MovieDetails:FC<IProps> = ({movieDetails}) => {
    const {title,poster_path,overview,budget,popularity,release_date,spoken_languages,vote_average}=movieDetails
    return (
        <div className={css.detailsDiv} >
            {poster_path?(
                <div className={css.imgDiv}><img src={imgURL+poster_path} alt={title}/></div>
            ):(
                <div className={css.imgDiv}><img src={notFoundURL} alt={title}/></div>
            )
            }
            <div className={css.infoDiv}>
                <div className={css.titleDiv}>{title}</div>
                <StarRatings
                    rating={vote_average / 2}
                    starDimension="20px"
                    starRatedColor="orange"
                />
                <div className={css.overviewDiv}>{overview}</div>
                <div>
                    <div><b>Budget</b>:{budget}</div>
                    <div><b>Views:</b>{popularity} </div>
                    <div><b>Release Date:</b>{release_date}</div>
                </div>
            </div>
            <div className={css.genreDiv}>
                <h2>Genres:</h2>
                {movieDetails.genres.map(genre=><GenresMovieNames key={genre.id} genreName={genre}/>)}</div>
            <div className={css.companyDiv}>
                <h1>Companies:</h1>
                {movieDetails.production_companies.map(companie=><ProductionCompanies key={companie.id} companie={companie}/>)}
            </div>
            <div className={css.languageDiv}>
                <h2>Languages</h2>
                {movieDetails.spoken_languages.map(language=><SpokenLanguages key={language.name} language={language}/>)}</div>
        </div>
    );
};

export {MovieDetails};