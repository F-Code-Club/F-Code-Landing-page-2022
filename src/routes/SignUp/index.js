import GoogleIcon from '../../assets/logo/google.png';
import {
    Container,
    Hero,
    Description,
    Step,
    Stage,
    Bar,
    Box,
    Name,
    NameContainer,
    Button,
    Google,
    Img,
    GoogleContainer,
} from './styled';

import CheckIcon from '@mui/icons-material/Check';

function SingUp() {
    return (
        <Container>
            <Hero>
                Sign up to join <span>F-Code.</span>
            </Hero>
            <Description>
                To become a member of <span>F-Code,</span> you need to sign up using FPT email.
            </Description>
            <Step>
                <Box>
                    <Stage>
                        <CheckIcon />
                    </Stage>
                </Box>
                <Bar />
                <Box>
                    <Stage>
                        <CheckIcon />
                    </Stage>
                </Box>
                <Bar />
                <Box>
                    <Stage>
                        <CheckIcon />
                    </Stage>
                </Box>
            </Step>
            <NameContainer>
                <Name>Register</Name>

                <Name>Check mail for confirmation mail</Name>

                <Name>Confirm</Name>
            </NameContainer>
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
