import {useState} from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import CustomTextField from "../Fields/CustomTextField";

function UserCreate({onSubmit}) {
    const [isOpen, setIsOpen] = useState(false);

    const userSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required very important field'),
    });

    const handleSubmit = data => {
        console.log(data);
        onSubmit(data);
        handleClose();
    };

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
        <div>
            <Tooltip title="Add new user to the list" aria-label="add">
                <Fab color="primary" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog
                open={isOpen}
                onClose={handleClose}
            >
                <DialogContent>
                    <Formik
                        initialValues={{firstName: ''}}
                        validationSchema={userSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, values, handleChange }) => (
                            <Form>
                                <div>
                                    <CustomTextField
                                        name="firstName"
                                        id="firstName"
                                        label="First Name"
                                    />
                                </div>

                                <Button type="submit" variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default UserCreate;
