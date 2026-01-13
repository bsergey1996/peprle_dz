import { useState } from 'react';
import styles from './Login.module.css';
import Input from '../Input/Input'; // Наш компонент с forwardRef
import Button from '../Button/Button';

function Login({ onLogin }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Если имя пустое — ничего не делаем
        if (!inputValue.trim()) return;

        // Вызываем функцию родителя и передаем туда имя
        onLogin(inputValue);
        
        // Очищаем инпут (опционально, ведь компонент скорее всего размонтируется)
        setInputValue('');
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <h1 className={styles.title}>Вход в дневник</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Input 
                        placeholder="Введите ваше имя"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button>Войти</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;