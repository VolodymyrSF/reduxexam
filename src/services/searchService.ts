import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../urls";

const searchService = {
    getSearch: (params: { query: string; page: number }): IRes<IMovies> =>
        axiosService.get(urls.getSearch.base, { params: { query: params.query, page: params.page } }),
};



export {searchService}