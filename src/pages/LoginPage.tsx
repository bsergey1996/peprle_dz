import { FC } from 'react';
import Login from '../Components/Login/Login';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    login(email);
    navigate('/');
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;
