import GoogleIcon from '../../assets/logo/google.png';
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
    let step = 2;
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
                    <Google>Login with Google</Google>
                </Button>
            </GoogleContainer>
        </Container>
    );
}

export default SingUp;
