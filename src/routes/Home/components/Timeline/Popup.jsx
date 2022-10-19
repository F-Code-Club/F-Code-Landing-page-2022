import Button from '../Button';
import Transition from './Transition';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
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
            <DialogTitle>{data.heading}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {data.content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={handleClose}>Disagree</Button> */}
                <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
        </Dialog>
    );
};

Popup.propTypes = {};

export default Popup;
