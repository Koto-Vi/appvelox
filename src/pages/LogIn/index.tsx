import React from "react";
import s from './LogIn.module.scss';
import Input from "../../components/Input";
import Button from "../../components/Button";

const LogIn: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Вход</h1>
            <span className={s.label}>{"У вас нет аккаунта? "}
                <a href="#" className={s.link}>Зарегистрироваться</a>
            </span>
            <Input>Почта или телефон</Input>
            <Input>Почта</Input>
            <div className={s.password}>
                <span className={s.label}>{"Забыли пароль? "}
                    <a href="#" className={s.link}>Восстановить</a>
            </span>
            </div>
            <Button>Войти</Button>
        </div>
    )
}

export default LogIn;