
import React, { createContext, useState } from 'react';

export const AppContext = createContext({
    loading : false,
    setLoading: () => {},
});

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const contextValue = {
        loading,
        setLoading
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};