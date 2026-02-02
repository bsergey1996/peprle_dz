import { forwardRef, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(styles.button, styles.accent, className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
