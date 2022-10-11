import { Field } from 'formik';

// import TextError from './TextError';
import Checkbox from '@mui/material/Checkbox';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

const CheckBox = ({ name, label, ...rest }) => {
    return (
        // <FormHelperText error={form.errors[name] ? true : false}>
        //     // // {form.errors[name]}
        //     // // //{' '}
        // </FormHelperText>
        // <input type="checkbox" {...field} {...rest} />
        // <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
        // <label>{label}</label>
        <div className="form-control">
            <Field name={name}>
                {({ field, meta }) => {
                    console.log(meta);
                    return (
                        <>
                            <FormControlLabel
                                control={
                                    <Checkbox defaultChecked color="success" {...field} {...rest} />
                                }
                                label={label}
                            />
                        </>
                    );
                }}
            </Field>
        </div>
    );
};

export default CheckBox;
