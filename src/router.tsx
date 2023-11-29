import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage} from "./pages";
import {GenresPage} from "./pages";
import {GenresListedPage} from "./pages/GenresListedPage";
import {SearchPage} from "./pages/SearchPage";

let router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'movie'}/>},
            {path:'movie',element:<MoviesPage/>,children:[
                    {path:'search',element:<SearchPage/>}
                ]},
            {path:'genre',element:<GenresPage/>},
            {path:'movie/:id',element:<MovieDetailsPage/>},
            {path:'genre/:id',element:<GenresListedPage/>},
            {path:'genre/:id/movies/:id',element:<MovieDetailsPage/>}
        ]}
]);

export {router}