import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const modalError = props => (
    <div>
        <Dialog
            open={props.open}
            transition={Transition}
            keepMounted
            onClose={props.close}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                {'Error occured!'}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {props.errorMsg}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClick} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    </div>
);

export default modalError;
