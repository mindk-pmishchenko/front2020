import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';

function CustomTextField(props) {
    const [field, {touched, error}] = useField(props);
    return (
        <TextField
            error={!!error}
            touched={touched.toString()}
            {...field}
            {...props}
        />
    );
}

export default CustomTextField;