import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
    firstName: Yup.string().required('required'),
    rollNumber: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    Major: Yup.string().required('required'),
    currentSemester: Yup.string().required('required'),
    phoneNumber: Yup.string()
        .required('phonenumber cannot be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Your phone does not right'),
    accpetChallenge: Yup.boolean().oneOf([true], 'Please accept the terms of service'),
});
