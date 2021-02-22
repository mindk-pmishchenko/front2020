import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

function UserCreate({onSubmit}) {

    const userSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required very important field'),
    });

    const handleSubmit = data => {
        console.log(data);
        onSubmit(data);
    };

    return (
        <div>
          User Creation Form
            <Formik
                initialValues={{firstName: ''}}
                validationSchema={userSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="firstName" placeholder="Enter first name..." />
                            {errors.firstName && touched.firstName ? (
                                <div>{errors.firstName}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default UserCreate;
