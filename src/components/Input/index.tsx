import React, {useState} from "react";
import s from './Input.module.scss'
interface InputProps {
    children?: string;
}

const Input: React.FC<InputProps> = ({children}) => {
    const [value, setValue] = useState<string>(children || '');
    return <input
        className={s.input}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}>

    </input>
}

export default Input;