import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../urls";
import {IMovieDetails} from "../interfaces";

const movieService={
    getAll:(page:number):IRes<IMovies>=>axiosService.get(urls.getMovie.base,{params:{page}}),
    getById:(id:number):IRes<IMovieDetails>=>axiosService.get(urls.getMovie.getById(id))
}

export {movieService}