const baseURL = 'https://api.themoviedb.org/3'


const movies = '/discover/movie'

const genres = '/genre/movie/list'

const urls = {
    movies:{
        movies,
        byId: (id:string|undefined):string => `/movie/${id}`,
        search: (): string => `/search/movie`
    },
    genres: {
        genres
    }
}

export {
    baseURL,
    urls,
}