import { Formik, Form } from 'formik';
import styled from 'styled-components';

import FormikControl from './Formik/FormikControl';

const FormRegister = () => {
    const initialValues = {
        email: '',
        password: '',
    };
    const onSubmit = (values) => {
        console.log('Form data', values);
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            // validationSchema={validationSchema}
        >
            {(formik) => {
                return (
                    <FormContainer>
                        <h2>Login Account</h2>
                        <FormikControl control="input" label="Email" name="email" />
                        <FormikControl control="input" label="Password" name="password" />
                        <button type="submit" disabled={!formik.isValid}>
                            submit
                        </button>
                    </FormContainer>
                );
            }}
        </Formik>
    );
};

export default FormRegister;

export const FormContainer = styled(Form)`
    width: 500px;
    height: 745px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
