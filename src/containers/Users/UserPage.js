import UserPage from '../components/UserPage/UserPage';

function UserPageContainer() {
    const initialData = {}; // from the back
    const onFormSubmit = (formData) => {
        // console.log('Form data:', formData);
        console.log(formData);
    };

    return (
        <UserPage onSubmit={onFormSubmit} initialData={initialData}/>
    );
}

export default UserPageContainer;
