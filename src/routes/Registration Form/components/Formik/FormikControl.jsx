import Input from './Input';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        // case 'textarea':
        //   return <Textarea {...rest} />
        // case 'checkbox':
        //   return <CheckboxGroup {...rest} />
        // case 'date':
        //   return <DatePicker {...rest} />
        default:
            return null;
    }
};

export default FormikControl;
