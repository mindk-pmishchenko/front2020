import PropTypes from 'prop-types';

import Text from './components/Text/Text';

function Form({title, size, onSubmit, counter, initialValues, userData}) {
    const initialInputValue = 'Test value';
    onSubmit('Submitted form data!');

    throw new Error('Some error!');


    return (
        <div>
            {title}
            counter: {counter + 1}
            {size && <Text inputSize={size} initial={initialInputValue}/>}
        </div>
    );
}

const sizes = [5, 10, 20, 30, 40];
const initialValuesType = PropTypes.shape({
    title: PropTypes.string,
    size: PropTypes.number
});

Form.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(sizes),
    onSubmit: PropTypes.func.isRequired,
    counter: PropTypes.number,
    initialValues: initialValuesType
};

Form.defaultProps = {
    counter: 1
};

export default Form;
