import { Field } from 'formik';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectItem = ({ label, name, options, ...rest }) => {
    return (
        <Field name={name}>
            {({ field, form, meta }) => {
                // <InputLabel>{label}</InputLabel>
                return (
                    <FormControl error={meta.touched && form.errors[name] ? true : false}>
                        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={name}
                            label={label}
                            {...field}
                            {...rest}
                            error={meta.touched && form.errors[name] ? true : false}
                        >
                            {options.map((option) => {
                                return (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.key}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <FormHelperText error={meta.touched && form.errors[name] ? true : false}>
                            {meta.touched && form.errors[name]}
                        </FormHelperText>
                    </FormControl>
                );
            }}
        </Field>
    );
};

export default SelectItem;
