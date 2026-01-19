import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(styles.input, className)}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
