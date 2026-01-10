import cn from 'classnames';
import styles from './Button.module.css';

const Button = ({ children , className, type, onClick}) => {
	return (
		<button 
			className={cn(styles.button, styles.accent, className)} 
			type={type} 
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;