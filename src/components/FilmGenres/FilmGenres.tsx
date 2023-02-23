import React, {FC, useEffect} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

import { genresActions } from '../../redux/slices/genreSlice';
import { Film } from '../Film/Film';
import css from './FilmGenres.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";

const FilmGenres:FC = () => {
    const dispatch = useAppDispatch();

    const { movieByGenres, totalPages } = useAppSelector((state) => state.genreReducer);

    const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
    const { id } = useParams();


    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({ page: '1' });
        }
        const page = searchParams.get('page');
        dispatch(genresActions.getMoviesByGenre({id, page }));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [setSearchParams, dispatch, searchParams, id]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage:number) => {
        setSearchParams({ page: newPage.toString() });
    };

    return (
        <div>
            <div className={css.mainDiv}>
                <div className={css.filmsBox}>
                    <div className={css.films}>
                        {movieByGenres.map((movie) => (
                            <Film key={movie.id} film={movie} />
                        ))}
                    </div>
                    <div className={css.pageDiv}>
                        <Pagination
                            count={totalPages}
                            page={+searchParams.get('page')!!}
                            onChange={handleChangePage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { FilmGenres };
