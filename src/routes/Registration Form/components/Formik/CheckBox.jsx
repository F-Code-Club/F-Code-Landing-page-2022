import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

function Checkbox(props) {
    const { name, label, ...rest } = props;
    return (
        <div className="form-control">
            <Field name={name}>
                {({ field, meta }) => {
                    console.log(meta);
                    return (
                        <>
                            <input type="checkbox" {...field} {...rest} />
                            <label>{label}</label>
                        </>
                    );
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default Checkbox;
