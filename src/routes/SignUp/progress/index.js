import { useEffect, useContext } from 'react';

import { UserContext } from '../../../utils/userContext';
import Status from '../status/index';
import { ProgressContainer } from './styled';

import Check from '@mui/icons-material/Check';
import Step from '@mui/material/Step';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';

let token = localStorage.getItem('token');
const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#DFDFDF',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#DFDFDF',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#00D17D',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#00D17D',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#00D17D',
        zIndex: 1,
        fontSize: 24,
        background: '#E7FDE8',
        borderRadius: '10px',
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));
// useEffect(() => {});

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

const ProgressBar = ({ progress }) => {
    const { success } = useContext(UserContext);
    const steps = [
        {
            key: 'Sign Up',
            title: token ? 'Sign Up Success' : 'Sign Up',
            description: '',
            step: 1,
            isDone: true,
        },
        {
            key: 'Register',
            title: success ? 'Register Success' : 'Register ',
            description: '',
            step: 2,
            isDone: false,
        },
        {
            key: 'Confirm',
            title: 'Confirm',
            description: '',
            step: 3,
            isDone: false,
        },
    ];
    return (
        // <ProgressContainer>
        //     {props.data.map((item) => (
        //         <Status key={item.key} data={item} progress={props.progress} />
        //     ))}
        // </ProgressContainer>
        <Stepper alternativeLabel activeStep={progress} connector={<QontoConnector />}>
            {steps.map((step) => (
                <Step key={step.title}>
                    <StepLabel StepIconComponent={QontoStepIcon}>{step.title}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

export default ProgressBar;
