import Checkbox from './CheckBox';
import Input from './Input';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'checkbox':
            return <Checkbox {...rest} />;
        default:
            return null;
    }
};

export default FormikControl;
