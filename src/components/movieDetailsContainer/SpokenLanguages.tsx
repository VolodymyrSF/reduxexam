import React, {FC} from 'react';

import css from "./SpokenLanguages.module.css"
import {ILanguages} from "../../interfaces";
interface IProps{
    language:ILanguages
}
const SpokenLanguages:FC<IProps> = ({language}) => {
    const {name}=language
    return (
        <div >
            <div className={css.langDiv}>{name}</div>
        </div>
    );
};

export {SpokenLanguages};