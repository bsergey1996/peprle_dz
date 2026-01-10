import styles from './JornalItem.module.css';

const JornalItem = ({data}) => {
	const {title, date, text} = data;
	let Data;
	if(!date) {
		Data = new Date();
	} else{
		Data = new Date(date);
	}
	
	const formattedDate = new Intl.DateTimeFormat('ru-RU').format(Data);
	return (
		<>
			<h2 className={styles.jornalItemHeader}>{title}</h2>
			<h2 className={styles.jornalItemBody}>
				<div className={styles.jornalItemDate}>{formattedDate}</div>
				<div className={styles.jornalItemText}>{text}</div>
			</h2>
		</>
	);
};

export default JornalItem;