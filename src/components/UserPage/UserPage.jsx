import Form from '../Form/Form';

function UserPage({onSubmit, initialData}) {
    const fromTitle = 'User creation form';
    const inputSize = 5;

    return (
        <Form title={fromTitle} size={inputSize} onSubmit={onSubmit}/>
    );
}

export default UserPage;
