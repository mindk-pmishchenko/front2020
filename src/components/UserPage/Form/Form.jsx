import Text from './components/Text/Text';

function Form({title, size, onSubmit}) {
    const initialInputValue = 'Test value';
    onSubmit('Submitted form data!');

    return (
        <div>
            {title}
            {size && <Text inputSize={size} initial={initialInputValue}/>}
        </div>
    );
}

export default Form;
