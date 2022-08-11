import React, {useState} from "react";
import s from './Button.module.scss'
interface ButtonProps {
    children?: string;
}

const Button: React.FC<ButtonProps> = ({children}) => {
    return <button className={s.button}>
        <span className={s.label}>
            {children}
        </span>
    </button>
}

export default Button;