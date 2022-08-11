import React from "react";
import s from './AuthWrapper.module.scss';
import doctors from '../../../assets/img/auth/doctors-1.png'
import AuthHeader from "../Header";
import AuthFooter from "../Footer";
import AuthWelcome from "../AuthWelcome";

interface AuthWrapperProps {
    children: React.ReactElement;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({children}) => {
    return (
        <section className={s.wrapper}>
            <div className={s.form}>
                <AuthHeader/>
                {children}
                <AuthFooter/>
            </div>
            <AuthWelcome image={doctors}/>
        </section>)

}

export default AuthWrapper;