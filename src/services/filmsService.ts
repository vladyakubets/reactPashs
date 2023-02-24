import {apiService, IRes} from "./apiService";
import {urls} from "../configs";
import {IConfigSearch, IDetails, IMovies} from "../interfaces";


const filmsService = {
    getByID: (id:string|undefined):IRes<IDetails> => apiService.get(urls.movies.byId(id)),
    searchByQuery: ({query, page}:IConfigSearch):IRes<IMovies> => apiService.get(urls.movies.search(), {params: {query, page}}),
    getAll: (page:string|null):IRes<IMovies> => apiService.get(urls.movies.movies, { params: { page } })
}


export {
    filmsService
}