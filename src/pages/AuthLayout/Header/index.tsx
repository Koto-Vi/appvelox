import React from "react";
import s from './Header.module.scss'
import eye from '../../../assets/img/auth/eye.svg';

const AuthHeader = () => {
    return <header className={s.wrapper}>
        <span className={s.title}>Портал пациента</span>
        <div className={s.linkWrapper}>
            <img src={eye} alt={"Иконка глаза"}/>
            <a href="src/pages/AuthLayout/Header/index#" className={s.link}>Версия для слабовидящих</a>
        </div>
    </header>
}

export default AuthHeader;