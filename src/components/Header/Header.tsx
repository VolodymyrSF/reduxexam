import React from 'react';
import {NavLink} from "react-router-dom";

import {userImgURL} from "../../urls/userImgURL";
import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux/slices/themeSlice";

const Header = () => {
    const dispatch =useAppDispatch()
    const currentTheme = useAppSelector((state)=>state.theme.themeMode);

    const changeTheme=()=>{
        dispatch(themeActions.changeTheme())
    }

    return (
        <div className={css.header}>
            <NavLink to={'movie'}>Movies</NavLink>
            <NavLink to={'genre'}>Genres</NavLink>
            <NavLink to={'movie/search'}>Search</NavLink>
            <button onClick={changeTheme} className={currentTheme === 'light' ? css.buttonThemeLight : css.buttonThemeDark}>{currentTheme === 'light' ? 'Dark' : 'Light'}</button>
            <img src={userImgURL} alt={'user'} className={css.userDiv}/>
        </div>
    );
};

export {Header};