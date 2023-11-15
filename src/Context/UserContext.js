import { createContext, useContext } from 'react';

const UserContext = createContext();

const useUserContext = () => {

    return useContext(UserContext);
};

export { UserContext, useUserContext };