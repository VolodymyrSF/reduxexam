import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks";

import {IQuery} from "../../interfaces";
import {searchActions} from "../../redux";
import {SearchedMovies} from "./SearchedMovies";
import css from '../MoviesContainer/Movies.module.css'
import {useEffect} from "react";
interface IProps{
    title:string
}
const SearchForm = () => {
    const{reset,register,handleSubmit}  = useForm<IQuery>({
        mode: "onBlur",
    });

    const {page,movies,total_pages}=useAppSelector(state => state.search)

    const dispatch = useAppDispatch();

    const search:SubmitHandler<IProps>=async (data)=>{
        await dispatch(searchActions.search({page:page,query:data.title}))
    }
//Ось цю частину доробити
    // useEffect(()=>{
    //     dispatch(searchActions.search({page,query:''}))
    // },[page,dispatch])
    const nextPage=()=>{
        dispatch(searchActions.setPage(page+1))
    }
    const prevPage=()=>{
        dispatch(searchActions.setPage(page-1))

    }
console.log(total_pages)
    return (
        <div>
        <form onSubmit={handleSubmit(search)} className={css.formDiv}>
            <input type={'text'} placeholder={'Введіть назву фільму'} {...register('title')} />
            <button type="submit">Search</button>
        </form>
            <div className={css.mainDiv}>
                <h1>Searched Movies</h1>
                <div className={css.bigDiv}>
                {movies.map(movie =><SearchedMovies key={movie.id} movie={movie}/>)}
                <div className={css.buttonDiv}>
                <button disabled={page===1} onClick={prevPage}>Prev Page</button>
                <div className={css.pageDiv}>Current Page:{page}</div>
                <button disabled={page>total_pages} onClick={nextPage}>Next Page</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export {SearchForm};