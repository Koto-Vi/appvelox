import React, {createRef, useCallback, useState} from "react";
import s from './Input.module.scss'
import clsx from "clsx";

interface InputProps {
    label?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({label, type='text'}) => {
    const [value, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const inputRef = createRef<HTMLInputElement>();

    const focusOnClickHandler = useCallback(() => {
        if (!isFocus) {
            setIsFocus(true);
            inputRef.current?.focus();
        }
    }, [inputRef, isFocus])

    return <div className={s.wrapper}
                onClick={focusOnClickHandler}
    >
        <span
              className={clsx(s.label, isFocus && s.focusedLabel)}>{label}</span>
        <input
            ref={inputRef}
            className={s.input}
            value={value}
            type={type}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            onBlur={() => { !value && setIsFocus(false) }}
        />
    </div>
}

export default Input;