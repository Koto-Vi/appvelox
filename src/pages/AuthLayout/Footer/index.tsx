import React from "react";
import s from './Footer.module.scss'
import logo from '../../../assets/img/auth/logo.png';

const AuthFooter = () => {
    return <footer className={s.wrapper}>
        <img src={logo} alt="Логотип"/>
    </footer>
}

export default AuthFooter;