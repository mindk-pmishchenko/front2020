import Form from '../Form/Form';
import React, {useState} from 'react';

function UserPage({onSubmit, initialData}) {
    const fromTitle = 'User creation form';
    const inputSize = 5;
    const [counter, setCounter] = useState(0);

    const handleClickPlus = () => {
        console.log('Clicked!');
        setCounter(counter + 1);
    };

    const handleClickMinus = () => {
        console.log('Clicked!');
        setCounter(counter - 1);
    };

    return (
        <>
            <Form title={fromTitle} size={inputSize} onSubmit={onSubmit} counter={counter}/>
            <button type="button" onClick={handleClickPlus}>Click+</button>
            <button type="button" onClick={handleClickMinus}>Click-</button>
        </>
    );
}

export default UserPage;
