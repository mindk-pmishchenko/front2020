import React, {useState} from 'react';

function Form({counter}) {
    const [name, setName] = useState('initial name');

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target[0].value);
        setName(event.target[0].value);
    };

    return (
        <>
            <div>Hello, {name}</div>
            <div>Clicked: {counter}</div>
            <form onSubmit={handleSubmit}>
                <input name="name"/>
                <button type="submit">Save</button>
            </form>
        </>
    );
}

export default Form;
