import styles from './JornalList.module.css';
import JornalItem from '../JornalItem/JornalItem';
import CardButton from '../CardButton/CardButton';

const sortItems = (a, b) => {
	if(a.date > b.date) return -1;
	if(a.date < b.date) return 1;
	return 0;	
};

const JornalList = ({ items }) => {
	if(!items || items.length === 0) {
		return (<p>Записей пока нет , добавьте первую</p>);
	}

	return (
		<div className={styles.jornalList}> 
			{items.sort(sortItems).map((el) => (
				<CardButton key={el.id}>
					<JornalItem
						data={el}
					/>
				</CardButton>
			))}
		</div>
	);
};
  
export default JornalList;