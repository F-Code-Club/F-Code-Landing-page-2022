import moment from 'moment';

import Button from '../Button';
import * as Styled from './Timeline.styled';
import Transition from './Transition';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Popup = ({ open = false, handleClose = () => {}, data = [] }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>
                <Styled.CardHeading>{data.title}</Styled.CardHeading>
                <Styled.CardSubheading>
                    {/* {`Time: ${moment(data.startTime).format('DD/MM')} - 
                                    ${moment(data.endTime).format('DD/MM')}`} */}
                    {`Time: ${data.startTime} - ${data.endTime}`}
                </Styled.CardSubheading>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {data.description}
                </DialogContentText>
            </DialogContent>
            <Styled.WrapperButton>
                <Button onClick={handleClose}>Agree</Button>
            </Styled.WrapperButton>
        </Dialog>
    );
};

Popup.propTypes = {};

export default Popup;
