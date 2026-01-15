import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'; // Проверь путь к хуку

// 1. Создаем сам контекст
const UserContext = createContext();

// 2. Создаем Провайдер (компонент-обертку)
export const UserProvider = ({ children }) => {
    // Используем наш хук. Теперь данные о юзере читаются из LS при старте
    // И автоматически пишутся туда при изменении.
    const [currentUser, setCurrentUser] = useLocalStorage('user', null);

    // Функция входа
    const login = (name) => {
        setCurrentUser({ name }); // Можем расширить объект, добавить id и т.д.
    };

    // Функция выхода
    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <UserContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// 3. Кастомный хук для удобства (чтобы не писать useContext(UserContext) везде)
export const useUser = () => {
    return useContext(UserContext);
};