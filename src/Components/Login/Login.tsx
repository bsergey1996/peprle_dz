import { useState, FC, FormEvent } from 'react';
import styles from './Login.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface LoginProps {
  onLogin: (name: string) => void;
}

const Login: FC<LoginProps> = ({ onLogin }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    onLogin(inputValue);
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
};

export default Login;
