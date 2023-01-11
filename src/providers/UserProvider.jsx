import { UserContext } from '@/contexts/userContext';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [login, setLogin] = useState(null);

    const handleLogin = async (bool) => {
        // 登入待串
        const login = bool;

        setLogin(login);

        const origin = location.state?.from?.pathname ?? '/airport';
        navigate(origin);
    };

    const handleLogout = () => {
        setLogin(null);
    };

    const value = {
        login,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
