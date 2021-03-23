import {useState} from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Cropper from 'react-cropper';
import "cropperjs/dist/cropper.css";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import CustomTextField from "../Fields/CustomTextField";

const FILE_TYPES = ['image/jpeg'];

function UserCreate({onSubmit}) {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState();
    const [croppedImage, setCroppedImage] = useState();
    const [cropper, setCropper] = useState();

    const userSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required very important field'),
    });

    const handleSubmit = data => {
        onSubmit({...data, avatar: croppedImage});
        handleClose();
    };

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    const handleChange = e => {
        e.preventDefault();
        const file = e.target.files[0];
        if (FILE_TYPES.includes(file.type) && file.size < 10000000) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL();
        } else {
            console.log('ERROR!');
        }
    };

    const cropImage = () => {
        if (typeof cropper !== 'undefined') {
            setCroppedImage(cropper.getCroppedCanvas().toDataURL());
        }
    };

    return (
        <div>
            <Tooltip title="Add new user to the list" aria-label="add">
                <Fab color="primary" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <img src="http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
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
                        {() => (
                            <Form>
                                <div>
                                    <CustomTextField
                                        name="firstName"
                                        id="firstName"
                                        label="First Name"
                                    />
                                </div>
                                <div>
                                    {!croppedImage && <Button variant="contained" component="label">
                                        Upload Image
                                        <input accept="image/jpeg" onChange={handleChange} hidden type="file"/>
                                    </Button>}
                                    {image && !croppedImage && <Cropper src={image} onInitialized={instance => setCropper(instance)} />}
                                    {image && !croppedImage && <Button variant="contained" onClick={cropImage}>Crop!</Button>}
                                    {croppedImage && <img src={croppedImage} />}
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
