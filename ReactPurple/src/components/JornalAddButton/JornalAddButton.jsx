import CardButton from '../CardButton/CardButton';
import styles from './JornalAddButton.module.css';

const JornalAddButton = () => {
	return (
		<CardButton className={styles.jornalAddButton}>
			<img src="/plus.svg" alt="" />	Новое воспоминание
		</CardButton>
	);
};

export default JornalAddButton;