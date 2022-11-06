import { useEffect, useState } from 'react';

import { useNavigate, useLocation, useSearchParams, Navigate } from 'react-router-dom';

import GoogleIcon from '../../assets/logo/google.png';
import { Button as Buttonregister } from '../../components/Header/header.style';
import { toastError } from '../../components/ToastNorification';
import { API_URL } from '../../config';
import { getStep } from '../../utils/productAPI';
import ProgressBar from './progress';
import {
    Container,
    Hero,
    Description,
    Button,
    Google,
    Img,
    GoogleContainer,
    ButtonLogOut,
} from './styled';

import LogoutIcon from '@mui/icons-material/Logout';
import SvgIcon from '@mui/material/SvgIcon';

function SingUp() {
    const navigate = useNavigate();
    const [step, setStep] = useState({ step: 0 });
    const location = useLocation();
    const [searchParams] = useSearchParams(location);
    let token = localStorage.getItem('token') || searchParams.get('token') || '';

    useEffect(() => {
        if (token) {
            getStep()
                .then((res) => {
                    setStep(res.data);
                })
                .catch((err) => {
                    console.log('err progress: ', err);
                });
        }
    }, []);
    useEffect(() => {
        token = localStorage.getItem('token') || searchParams.get('token') || '';
        const success = searchParams.get('success') || '';
        if (token) {
            localStorage.setItem('token', token);
            navigate('/signup');
        } else if (success) {
            toastError('Invalid Account, Please Sign Up again, Use FPT Education Mail');
            navigate('/signup');
        }
    }, []);
    const progress = [
        {
            key: 'Sign Up',
            title: 'Sign Up',
            description: '',
            step: 1,
            isDone: true,
        },
        {
            key: 'Register Success',
            title: 'Register Success',
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
        <Container>
            <Hero>
                Sign up to join <span>F-Code.</span>
            </Hero>
            <Description>
                To become a member of <span>F-Code,</span> you need to sign up using FPT email.
            </Description>
            <ProgressBar progress={step.step} data={progress} />
            {!token ? (
                <GoogleContainer>
                    <Button type="button" href={`${API_URL}/auth/google`}>
                        <Img src={GoogleIcon} alt="" />
                        <Google>Sign up with Google</Google>
                    </Button>
                </GoogleContainer>
            ) : (
                <div style={{ marginTop: '40px' }}>
                    <Buttonregister style={{ width: '200px', margin: 'auto' }} to="/register">
                        Register
                    </Buttonregister>
                    <GoogleContainer>
                        <ButtonLogOut
                            type="button"
                            onClick={() => {
                                localStorage.removeItem('token');
                                setStep(0);
                                navigate('/signup');
                            }}
                        >
                            <SvgIcon sx={{ marginRight: '10px' }} component={LogoutIcon}></SvgIcon>
                            Log Out
                        </ButtonLogOut>
                    </GoogleContainer>
                </div>
            )}
        </Container>
    );
}

export default SingUp;
