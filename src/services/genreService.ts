import {apiService, IRes} from "./apiService";
import {urls} from "../configs";
import {IGenre, IMovies} from "../interfaces";

const genreService = {
    getAll: ():IRes<IGenre> => apiService.get(urls.genres.genres),
    getByGenreId: (id:string|undefined, page:string|null):IRes<IMovies> => apiService.get(urls.movies.movies, { params: { with_genres: id, page: page } })
}

export {
    genreService,
}