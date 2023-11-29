import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IQuery} from "../../interfaces/searchInterface";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux/slices/searchSlice";
import {SearchedMovies} from "./SearchedMovies";

interface IProps{
    title:string
}
const SearchForm = () => {
    const{reset,register,handleSubmit}  = useForm<IQuery>();
    const {page,movies}=useAppSelector(state => state.search)
    const dispatch = useAppDispatch();

    const search:SubmitHandler<IProps>=async (data)=>{
        await dispatch(searchActions.search({page:page||1,query:data.title}))
    }

    // useEffect(()=>{
    //     dispatch(searchActions.search({page,query:''}))
    // },[page,dispatch])
    const nextPage=()=>{
        dispatch(searchActions.setPage(page+1))
    }
    const prevPage=()=>{
        dispatch(searchActions.setPage(page-1))

    }

    console.log(movies)
    console.log(page)
    return (
        <form onSubmit={handleSubmit(search)}>
            <input type={'text'} placeholder={'Введіть назву фільму'} {...register('title')} />
            <button type="submit">Search</button>
            <>
            {movies.map(movie =><SearchedMovies key={movie.id} movie={movie}/>)}
            </>
            <button disabled={page===1} onClick={prevPage}>Prev Page</button>
            <div>Current Page:{page}</div>
            <button onClick={nextPage}>Next Page</button>
        </form>
    );
};

export {SearchForm};