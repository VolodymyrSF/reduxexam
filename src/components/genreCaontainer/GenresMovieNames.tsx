import React, {FC} from 'react';

import {IGenre} from "../../interfaces";



interface IProps{
    genreName:IGenre
}
const GenresMovieNames:FC<IProps> = ({genreName}) => {
    const {name}=genreName
    return (
        <div>
            <div >{name}</div>
        </div>
    );
};

export {GenresMovieNames};