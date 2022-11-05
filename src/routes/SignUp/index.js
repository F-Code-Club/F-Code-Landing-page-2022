import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import GoogleIcon from '../../assets/logo/google.png';
import { Button as Buttonregister } from '../../components/Header/header.style';
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
import Title from './title';

import LogoutIcon from '@mui/icons-material/Logout';
import SvgIcon from '@mui/material/SvgIcon';
import { margin } from '@mui/system';

function SingUp() {
    const navigate = useNavigate();
    const [step, setStep] = useState({ step: 0 });
    let token = localStorage.getItem('token');

    useEffect(() => {
        let token = localStorage.getItem('token');
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
                                navigate('/');
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
