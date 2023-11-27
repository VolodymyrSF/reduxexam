const baseURL='https://api.themoviedb.org/3/'

const api_key='e8766c3c0015a5d8e8e634b179e7ac89'

const genre='genre/'
const movie='movie'
const search='search/'
const getMovie=`discover/movie?api_key=${api_key}`
const getGenre=`genre/movie/list?api_key=${api_key}`
const urls={
    getMovie:{
        base:getMovie,
        getById:(id:number):string=>`${movie}/${id}?api_key=${api_key}`
    },
    getGenre:{
        base:getGenre,
        getById:(id:number):string =>`${genre}${id}/movies?api_key=${api_key}`
    },
    getSearch:{
        base:`${search}${movie}?api_key=${api_key}`
    }
}

export {baseURL,urls}