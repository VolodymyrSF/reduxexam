import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks";

import {IQuery} from "../../interfaces";
import {searchActions} from "../../redux";
import {SearchedMovies} from "./SearchedMovies";
import css from '../MoviesContainer/Movies.module.css'
import { useEffect, useRef} from "react";

interface IProps{
    title:string
    searchTitle:string
}


const SearchForm = () => {
    const{reset,register,handleSubmit}  = useForm<IQuery>({
        mode: "onBlur",
    });

    let {page,movies,total_pages}=useAppSelector(state => state.search)

    const dispatch = useAppDispatch();

    const searchTitleRef = useRef<string>("");

    const search:SubmitHandler<{title:string}>=async (data)=>{
        searchTitleRef.current = data.title;
            await dispatch(searchActions.search({page:1,query:data.title}))
        reset()
    }

    const nextPage=async ()=>{
        const nextPage=page+1
       await dispatch(searchActions.setPage(nextPage))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        reset()
    }
    const prevPage=async ()=>{
        const prevPage=page-1
        await dispatch(searchActions.setPage(prevPage))
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Додає плавність прокрутки
        });
        reset()
    }

    useEffect(()=>{
        const newSearchResults=async ()=>{
            await dispatch(searchActions.search({page:page,query:searchTitleRef.current}))
        }
        newSearchResults()
    },[page,searchTitleRef,dispatch])

    return (
        <div>
        <form onSubmit={handleSubmit(search)} className={css.formDiv}>
            <input type={'text'} placeholder={'Введіть назву фільму'} {...register('title')} />
            <button  type="submit">Search</button>
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