import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    studentId: Yup.string()
        .required('Required')
        .matches(
            /^(S|s|Q|q)[E|A|S|s|e|a]+([0-9]{6})$/,
            'Your roll number must match the following formats'
        ),
    personalMail: Yup.string()
        .required('email cannot be empty')
        .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, 'Your email must match the following formats'),
    lastName: Yup.string().required('Required'),
    Major: Yup.string().required('Required'),
    currentSemester: Yup.string().required('Required'),
    phoneNumber: Yup.string()
        .required('Phonenumber cannot be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Your phone does not right'),
    acceptChallenge: Yup.boolean().oneOf([true], ' Please accept the challenges of F-Code'),
});
