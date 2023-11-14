import React from 'react';
import UserContextProvider from '../Context/UserContextProvider';
import UserProfile from '../Context/UserProfile';
import { useSelector, useDispatch } from 'react-redux';

const UserList = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch()

    const addUser = () => {
        dispatch( {type:'AJOUTER_UTILISATEUR', payload: 'boby' })
    }
    return (
        <ul>
            <button onClick={addUser}>Ajouter un utilisateur</button>
            { users.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
        </ul>
    );
};

function Contact() {
    return (
        <UserContextProvider>
            <div>
                <h1>User Profile App</h1>
                <UserProfile/>
                <UserList/>
            </div>
        </UserContextProvider>);
}

export default Contact;