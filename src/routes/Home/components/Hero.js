import Computer from '../../../assets/images/computer.svg';
import { Container, LeftHero, ButtonContainer, Button, V2Button, RightHero } from './styled';

function Hero() {
    return (
        <Container>
            <LeftHero>
                <h1>
                    Code the<br></br> future
                    <br />
                    with <span>F-Code.</span>
                </h1>
                <p>
                    F-Code is a club, a community, a family where all members share the same passion
                    for coding. What are you waiting for? Join us now.
                </p>
                <ButtonContainer>
                    <Button>Register Now</Button>
                    <V2Button>TimeLine</V2Button>
                </ButtonContainer>
            </LeftHero>
            <RightHero>
                <img src={Computer} alt="" />
            </RightHero>
        </Container>
    );
}

export default Hero;
