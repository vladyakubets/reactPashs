import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';

import { Film } from '../Film/Film';
import { filmActions } from '../../redux/slices/filmSlice';
import css from './Films.module.css';
import { useAppDispatch, useAppSelector } from "../../hooks";

const Films: FC = () => {
    const dispatch = useAppDispatch();

    const { films, totalPages } = useAppSelector((state) => state.filmReducer);

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        if (!query.get('page')) {
            setQuery({ page: '1' });
        }
    }, [])

    useEffect(() => {
        dispatch(filmActions.getAll({ page: query.get('page') || '1' }));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [dispatch, query]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        console.log(newPage);
        setQuery({ page: newPage.toString() });
    };

    return (
        <>
            <div className={css.films}>
                {/* {films.map((film) => ( */}
                <Film film={films[0]} />
                <Film film={films[0]} />
                <Film film={films[0]} />
                <Film film={films[0]} />
                <Film film={films[0]} />
                {/* ))} */}
            </div>
            <div className={css.pageDiv}>
                <Pagination
                    count={totalPages}
                    page={+query.get('page')!!}
                    onChange={handleChangePage}
                />
            </div>
        </>
    );
};

export { Films };