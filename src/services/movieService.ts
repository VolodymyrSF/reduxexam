import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../urls";

const movieService={
    getAll:(page:number):IRes<IMovies>=>axiosService.get(urls.getMovie.base,{params:{page}})
}

export {movieService}