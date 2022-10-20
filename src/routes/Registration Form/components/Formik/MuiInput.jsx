import { Field } from 'formik';

import { TextField } from '@mui/material';

const MuiInput = ({ label, name, ...rest }) => {
    return (
        <Field name={name}>
            {({ field, form, meta }) => {
                return (
                    <>
                        <TextField
                            label={label}
                            id={name}
                            sx={{
                                width: {
                                    xs: '220px',
                                    sm: '255px',
                                    md: '320px',
                                },
                                // "320px",
                                height: '54px',
                            }}
                            {...rest}
                            {...field}
                            error={meta.touched && form.errors[name] ? true : false}
                            helperText={meta.touched && form.errors[name]}
                            variant="outlined"
                        />
                    </>
                );
            }}
        </Field>
    );
};

export default MuiInput;
