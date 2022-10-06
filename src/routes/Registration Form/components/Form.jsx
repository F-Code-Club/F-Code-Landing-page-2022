import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import FormikControl from './Formik/FormikControl';

const FormRegister = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        Major: '',
        rollNumber: '',
        currentSemester: '',
        accpetChallenge: false,
        phoneNumber: '',
    };
    const validationSchema = Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        Major: Yup.string().required(),
        phoneNumber: Yup.string()
            .required('phonenumber cannot be empty')
            .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Your phone does not right'),
        accpetChallenge: Yup.boolean().oneOf([true], 'Please accept the terms of service'),
    });

    const onSubmit = (values) => {
        console.log('Form data', values);
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => {
                return (
                    <FormContainer>
                        <h2>Registration Form</h2>
                        <GroupInput>
                            <FormikControl control="input" label="Name" name="firstName" />
                            <FormikControl control="input" label="" name="lastName" />
                        </GroupInput>
                        <FormikControl control="input" label="Major" name="Major" />
                        <GroupInput>
                            <FormikControl control="input" label="Roll Number" name="rollNumber" />
                            <FormikControl
                                control="input"
                                label="Current Semester"
                                name="currentSemester"
                            />
                        </GroupInput>
                        <FormikControl control="input" label="Phone Number" name="phoneNumber" />

                        <FormikControl
                            control="checkbox"
                            name="accpetChallenge"
                            label="I accept to take the challenges of F-Code"
                        />

                        <button type="submit">Register Now</button>
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

export const GroupInput = styled.div`
    display: flex;
    justify-content: space-between;
`;
