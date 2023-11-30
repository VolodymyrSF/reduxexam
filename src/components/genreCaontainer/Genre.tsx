import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces/genreInterface";
import css from './Genre.module.css'

interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const {id,name}=genre
    const navigate = useNavigate();
    return (
        <div className={css.genresDiv} onClick={()=>navigate(`${id}`)}>
            <div className={css.genreDiv} >{name}</div>
        </div>
    );
};

export {Genre};