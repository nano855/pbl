import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMyData } from '../store/myDataReducer';

const About = () => {
    const dispatch = useDispatch();
    const myData = useSelector((state) => state.myData.value);

    const handleButtonClick = () => {

        dispatch(setMyData('New Data'));
    };

    return (
        <div>
            <p>My Data: {myData}</p>
            <button onClick={handleButtonClick}>Update Data</button>
        </div>
    );
};

export default About;