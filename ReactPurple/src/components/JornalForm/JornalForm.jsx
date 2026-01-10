
import { useState } from 'react';
import Button from '../Button/Button';
import cn from 'classnames';
import styles from './JornalForm.module.css';

const JornalForm = ({ onSubmit }) => {
	const [formValidState, setFormValidState] = useState({
		title: true,
		date: true,
		tag: true,
		text: true
	});

	const addJornalItem = (e) => {
		e.preventDefault();
		console.log(e,'Добавлено новое воспоминание');
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData.entries());
		let isFormValid = true;
		if(!formProps.title?.trim().length){
			setFormValidState(prev => ({ ...prev, title: false }));
			isFormValid = false;
		}
		if(!formProps.text?.trim().length){
			setFormValidState(prev => ({ ...prev, text: false }));
			isFormValid = false;
		}
		if(!formProps.date){
			setFormValidState(prev => ({ ...prev, date: false }));
			isFormValid = false;
		}
		if(!isFormValid){
			return;
		}
		onSubmit(formProps);
	};

	return (
		<form className={styles.jornalForm} onSubmit={addJornalItem}>
			<div>
				<input 
					name='title'
					className={styles.jornalFormTitle}
					type="text"
					placeholder="Заголовок" />
			</div>
			<div className={styles.jornalFormRow}>
				<label htmlFor="date" className={styles.jornalFormLabel}>
					<img src="/calendar.svg" alt="calendar icon"/> <span>Дата: </span>
				</label>
				<input 
					name='date' id='date'
					className={cn(styles.input, styles.jornalFormDate)}
					type="date" />
			</div>
			<div className={styles.jornalFormRow}>
				<label htmlFor="tag" className={styles.jornalFormLabel}>
					<img src="/folder.svg" alt="folder icon"/> <span>Метки: </span>
				</label>
				<input 
					name='tag' id='tag'
					className={cn(styles.input, styles.jornalFormTag)}
					type="text"  />
			</div>
	
			<textarea 
				name='text'
				className={styles.jornalFormText}
				placeholder="Ваши воспоминания..." />
			<Button className={styles.jornalFormButton} type="submit">Сохранить</Button>
		</form>
	);
};

export default JornalForm;