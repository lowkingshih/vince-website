import { createContext } from 'react';

export const UserContext = createContext({
    user: {
        name: '',
        unit: '',
    },
    login: false,
    onLogin() {},
    onLogout() {},
});
