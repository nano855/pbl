import React from 'react';
import { UserContext } from './UserContext';

const UserContextProvider = ({ children }) => {
    const userData = {
        username: 'hassan',
        email: 'example@hassan.com',
    };

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
