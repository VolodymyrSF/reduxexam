import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/Header";
import {useAppSelector} from "../hooks";
import css from './MainLayout.module.css'

const MainLayout = () => {
    const currentTheme = useAppSelector((state) => state.theme.themeMode);

    return (
        <div className={currentTheme === 'light' ? css.lightTheme : css.darkTheme}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};