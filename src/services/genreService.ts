import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../urls";
import {IMovies} from "../interfaces";

const genreService={
    getAll:():IRes<IGenres>=>axiosService.get(urls.getGenre.base),
    getById:(id:number,page:number):IRes<IMovies>=>axiosService.get(urls.getGenre.getById(id),{params:{page}})
}

export {genreService}