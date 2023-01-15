import CheckBox from './CheckBox';
import Input from './Input';
import MuiInput from './MuiInput';
import SelectItem from './Select';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'checkbox':
            return <CheckBox {...rest} />;
        case 'MuiInput':
            return <MuiInput {...rest} />;
        case 'Select':
            return <SelectItem {...rest} />;
        default:
            return null;
    }
};

export default FormikControl;
