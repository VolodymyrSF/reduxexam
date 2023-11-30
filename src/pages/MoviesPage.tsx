import React from 'react';

import {Movies} from "../components/MoviesContainer";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
            <Movies/>
        </div>
    );
};

export {MoviesPage};