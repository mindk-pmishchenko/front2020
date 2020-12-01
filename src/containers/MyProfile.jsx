import UserPage from '../components/UserPage/UserPage';

function MyProfileContainer({showPage}) {
    const initialData = {}; // from the back
    const onFormSubmit = (formData) => {
        // console.log('Form data:', formData);
        console.log(formData);
    };


    return (
        showPage && <UserPage onSubmit={onFormSubmit} initialData={initialData}/>
    );
}

export default MyProfileContainer;
