import cn from 'classnames';
import styles from './CardButton.module.css';

const CardButton = ({children, className}) => {
	return (
		<button className={cn(styles.cardButton, className)}>{children}</button>
	);
};

export default CardButton;