import React, { forwardRef } from 'react';
import styles from './Input.module.css'; // Не забудь создать стили
import cn from 'classnames';

// Оборачиваем компонент в forwardRef
const Input = forwardRef(function Input({ className, ...props }, ref) {
    return (
        <input
            ref={ref} // Передаем реф реальному input-у
            className={cn(styles.input, className)}
            {...props}
        />
    );
});

export default Input;