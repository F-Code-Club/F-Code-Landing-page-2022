import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    rollNumber: Yup.string()
        .required('Required')
        .matches(
            /^(S|s)[E|A|S|s|e|a]+([0-9]{6})$/,
            'Your roll number must match the following formats'
        ),
    lastName: Yup.string().required('Required'),
    Major: Yup.string().required('Required'),
    currentSemester: Yup.string().required('Required'),
    phoneNumber: Yup.string()
        .required('Phonenumber cannot be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Your phone does not right'),
    acceptChallenge: Yup.boolean().oneOf([true], ' Please accept the challenges of F-Code'),
});
