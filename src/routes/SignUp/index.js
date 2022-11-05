import GoogleIcon from '../../assets/logo/google.png';
import { API_URL } from '../../config';
// import { get } from '../../utils/ApiCaller';
import { getLogin } from '../../utils/productAPI';
import ProgressBar from './progress';
import { Container, Hero, Description, Button, Google, Img, GoogleContainer } from './styled';
import Title from './title';

function SingUp() {
    const progress = [
        {
            key: 'registration',
            title: 'Register',
            description: '',
            step: 1,
            isDone: true,
        },
        {
            key: 'verifyMail',
            title: 'Check mail for confirmation mail',
            description: '',
            step: 2,
            isDone: false,
        },
        {
            key: 'Accept',
            title: 'Confirm',
            description: '',
            step: 3,
            isDone: false,
        },
    ];
    let step = 1;
    return (
        <Container>
            <Hero>
                Sign up to join <span>F-Code.</span>
            </Hero>
            <Description>
                To become a member of <span>F-Code,</span> you need to sign up using FPT email.
            </Description>
            <ProgressBar progress={step} data={progress} />
            <Title data={progress} />
            <GoogleContainer>
                <Button type="button">
                    <Img src={GoogleIcon} alt="" />
                    <Google>
                        <a href={`${API_URL}/auth/google`}>Sign up with Google</a>
                    </Google>
                </Button>
            </GoogleContainer>
        </Container>
    );
}

export default SingUp;
