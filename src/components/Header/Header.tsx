import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';

import css from './Header.module.css';
import { FormSearch } from '../FormSearch/FormSearch';
import {MainLayoutProps} from "../../layouts";

const Header:FC<MainLayoutProps> = ({ switchTheme, theme }) => {

    const navigate = useNavigate();

    return (
        <div className={css.mainBox}>
            <div className={css.box}>
                <button className={css.buttonNav}>Home</button>
                <button className={css.buttonNav} onClick={() => navigate('films')}>
                    Films
                </button>
                <button className={css.buttonNav}>Серіали</button>
            </div>
            <FormSearch />
            <button className={css.buttonThemeSwitch} onClick={() => switchTheme()}>
                {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <div className={css.userDiv}>P</div>
        </div>
    );
};

export {Header};

