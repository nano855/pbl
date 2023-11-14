import React from 'react';
import { useUserContext } from './UserContext';

const UserProfile = () => {
    const userData = useUserContext();
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
};

export default UserProfile;
