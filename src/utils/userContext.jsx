import { createContext, useState } from 'react';

export const UserContext = createContext({
    success: null,
    setSuccess: () => null,
});

export const UserProvider = ({ children }) => {
    const [success, setSuccess] = useState(false);

    const value = {
        success,
        setSuccess,
    };
    return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
