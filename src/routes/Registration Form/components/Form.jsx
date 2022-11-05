import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { toastSuccess, toastError } from '../../../components/ToastNorification';
import { post } from '../../../utils/ApiCaller';
import Button from '../../Home/components/Button';
import { FormContainer, ButtonWrapper } from '../style';
import FormikControl from './Formik/FormikControl';
// import * as Yup from 'yup';
import { ValidationSchema } from './Schema/validation';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const initialValues = {
    firstName: '',
    lastName: '',
    Major: '',
    rollNumber: '',
    currentSemester: '',
    emailFpt: '',
    emailPersonal: '',
    acceptChallenge: false,
    phoneNumber: '',
};
const FormRegister = () => {
    const navigate = useNavigate();
    const optionSemester = [
        { key: 'LUK1', value: 0 },
        { key: 'LUK2', value: 1 },
        { key: 'LUK3', value: 2 },
        { key: 'LUK4', value: 3 },
        { key: 'TRS4', value: 4 },
        { key: 'TRS5', value: 5 },
        { key: 'TRS6', value: 6 },
        { key: 'CN1', value: 7 },
        { key: 'CN2', value: 8 },
        { key: 'CN3', value: 9 },
    ];
    const optionsMajor = [
        { key: 'Software Engineering', value: 'Software Engineering' },
        { key: 'Artificial Intelligence', value: 'Artificial Intelligence' },
        { key: 'Information Assurance', value: 'Information Assurance' },
        { key: 'Information Systems', value: 'Information Systems' },
        { key: 'IoT (Internet of Things)', value: 'IoT (Internet of Things)' },
        { key: 'Digital Art Design', value: 'Digital Art Design' },
        { key: 'International Business', value: 'International Business' },
        { key: 'Business Administration', value: 'Business Administration' },
        { key: 'Multimedia', value: 'Multimedia' },
        { key: 'Digital Marketing', value: 'Digital Marketing' },
        {
            key: 'Tourism & Travel Service Management',
            value: 'Tourism & Travel Service Management',
        },
        { key: 'Hotel Management', value: 'Hotel Management' },
        { key: 'English Studies', value: 'English Studies' },
        { key: 'Multimedia', value: 'Japanese language' },
        { key: 'Korean language', value: 'Korean language' },
    ];

    const onSubmit = (values) => {
        const {
            firstName,
            lastName,
            Major,
            rollNumber,
            currentSemester,
            emailFpt,
            emailPersonal,
            phoneNumber,
        } = values;

        let FormData = {};

        FormData.name = firstName + ' ' + lastName;
        FormData.major = Major;
        FormData.personalMail = emailPersonal;
        FormData.schoolMail = emailFpt;
        FormData.phone = phoneNumber;
        FormData.rollNumber = rollNumber;
        FormData.semester = currentSemester;

        const response = post(
            '/register-challenge/new',
            FormData,
            {},
            { 'Access-Control-Allow-Origin': '*' }
        )
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.log(error.response.data));
        console.log(FormData);

        console.log('Form data', values);
        toastSuccess('Congratulations!!');
        navigate('/signup');
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ValidationSchema}
        >
            {(formik) => {
                return (
                    <FormContainer data-aos="fade-right">
                        <Typography
                            sx={{
                                fontFamily: 'GT Walsheim Pro Black',
                                fontSize: { xs: '50px', sm: '60px' },
                                lineHeight: '65px',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            Registration Form
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '150%',
                                color: '#6B7280',
                                marginBottom: '10px',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            Fill in all the information to receive challenges from us!
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '100%', sm: '200px' },
                                        borderWidth: '2px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="First Name"
                                    name="firstName"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '100%', sm: '200px' },

                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '100%', sm: '433px', lg: '433px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="FPT Email"
                                    name="emailFpt"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '100%', sm: '433px', lg: '433px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Personal Email"
                                    name="emailPersonal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="Select"
                                    label="Major"
                                    sx={{
                                        width: { xs: '300px', sm: '433px' },
                                        borderRadius: '10px',
                                    }}
                                    options={optionsMajor}
                                    name="Major"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="MuiInput"
                                    label="Roll Number"
                                    sx={{
                                        width: { xs: '100%', sm: '200px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    placeholder="SE180000"
                                    name="rollNumber"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormikControl
                                    control="Select"
                                    sx={{
                                        width: { xs: '300px', sm: '200px' },
                                        borderRadius: '10px',
                                    }}
                                    options={optionSemester}
                                    label="Current Semester"
                                    name="currentSemester"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="MuiInput"
                                    sx={{
                                        width: { xs: '100%', sm: '433px', lg: '433px' },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    label="Phone Number"
                                    name="phoneNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikControl
                                    control="checkbox"
                                    name="acceptChallenge"
                                    label="I accept to take the challenges of F-Code"
                                />
                            </Grid>
                        </Grid>
                        <ButtonWrapper>
                            <Button type="submit" disabled={!formik.isValid}>
                                Register Now
                            </Button>
                        </ButtonWrapper>
                    </FormContainer>
                );
            }}
        </Formik>
    );
};

export default FormRegister;
