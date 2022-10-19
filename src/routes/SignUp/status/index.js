import { StatusContainer, Step } from './styled';

import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';

const Status = (props) => {
    const { step } = props.data;
    const renderChecked = () => {
        if (props.progress >= step) {
            return <DoneIcon />;
        } else {
            return <ClearIcon />;
        }
    };

    return (
        <StatusContainer>
            <Step isDone={props.progress >= step ? true : false}>{renderChecked()}</Step>
        </StatusContainer>
    );
};

export default Status;
