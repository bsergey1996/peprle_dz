import { forwardRef } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

// Оборачиваем в forwardRef, чтобы родитель мог получить доступ к DOM-кнопке
const Button = forwardRef(function Button({ children, onClick, className, ...props }, ref) {
    return (
        <button
            ref={ref} // Передаем реф реальному тегу button
            className={cn(styles.button, styles.accent, className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
});

export default Button;