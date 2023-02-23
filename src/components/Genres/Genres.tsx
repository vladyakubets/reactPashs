import React, {FC, useEffect} from 'react';

import {Genre} from "../Genre/Genre";
import {genresActions} from "../../redux/slices/genreSlice";
import css from './Genres.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";

const Genres: FC = () => {

        const dispatch = useAppDispatch();

        const {genres} = useAppSelector(state => state.genreReducer);

        useEffect(() => {
            dispatch(genresActions.getAll())
        }, [dispatch])
        return (
            <div className={css.mainDiv}>
                <div className={css.genreBox}>
                    {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
                </div>
            </div>
        );
    };

export {Genres}