import React from "react";
import s from './AuthWelcome.module.scss';

interface AuthWrapperProps {
    image: string;
}

const AuthWelcome: React.FC<AuthWrapperProps> = ({image}) => {
    return (
        <div className={s.wrapper}>
            <p className={s.title}>Добро пожаловать</p>
            <img src={image} alt="Картинка докторов"/>
            <p className={s.label}>Вместе с нами медицина стала проще!</p>
        </div>)

}

export default AuthWelcome;