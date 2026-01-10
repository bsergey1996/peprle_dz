import JornalList from './components/JornalList/JornalList';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';

import LeftPanel from './layouts/LeftPanel/';
import Header from './layouts/Header/';
import Body from './layouts/Body/';

import './App.css';
import JornalForm from './components/JornalForm/JornalForm';
import { useState } from 'react';

function App() {
	const [items, setItems] = useState([]);

	const getNextId = () => {		
		return items.length ? Math.max(...items.map(item => item.id)) + 1 : 1;
	};

	const addItem = item => {
		setItems(prevItems => 
			[...prevItems, {...item, id: getNextId()}]);
	};

	
	return (
		<div className='App'>
			<LeftPanel>
				<Header />
				<JornalAddButton />
				<JornalList items={items} />				
			</LeftPanel>
			<Body>
				<JornalForm onSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;
