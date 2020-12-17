import Form from '../Form/Form';
import React, {useState} from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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

    const initialValues = {
        title: 'New User',
        size: 10
    };

    const userData = {
        id: 1,
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 25,
        avatar: {
            fileId: 1,
            file: {
                id: 1,
                name: 'photo.jpg',
                path: '/upload/photo.jpg',
                size: 1234
            }
        },
        friends: [{}, {}, {}], //array of users
        articles: [{
            title: 'Article 1',
            text: 'Some text',
            images: [{}, {}, {}], // array of files
            createdAt: '2020-12-17 19:00:00',
            editedAt: '2020-12-17 20:00:00',
            likes: [
                {userId: 2, user: {id: 2}, date: '2020-12-17 21:00:00'},
                {userId: 3, user: {id: 3}, date: '2020-12-17 22:00:00'}
            ]
        }]
    };

    return (
        <>
            <ErrorBoundary>
                <Form title={fromTitle} size={inputSize} onSubmit={onSubmit} initialValues={initialValues} userData={userData}/>
            </ErrorBoundary>
            <button type="button" onClick={handleClickPlus}>Click+</button>
            <button type="button" onClick={handleClickMinus}>Click-</button>
        </>
    );
}

export default UserPage;
