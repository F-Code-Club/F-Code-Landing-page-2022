import Status from '../status/index';
import { ProgressContainer } from './styled';

const ProgressBar = (props) => {
    return (
        <ProgressContainer>
            {props.data.map((item) => (
                <Status key={item.key} data={item} progress={props.progress} />
            ))}
        </ProgressContainer>
    );
};

export default ProgressBar;
