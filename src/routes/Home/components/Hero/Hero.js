import { NavLink } from 'react-router-dom';
import Typed from 'react-typed';

import Computer from '../../../../assets/images/computer.svg';
import {
    Container,
    Highlight,
    LeftHero,
    ButtonContainer,
    Button,
    V2Button,
    RightHero,
} from '../styled';

function Hero() {
    return (
        <Container data-aos="fade-down">
            <LeftHero>
                <h1>
                    Code the <br />
                    <Typed
                        strings={['future', 'dream', 'journey']}
                        typeSpeed={200}
                        backSpeed={100}
                        loop={true}
                    />{' '}
                    <br />
                    with <span>F-Code.</span>
                </h1>
                <p>
                    <Highlight>F-Code</Highlight> is a club, a community, a family where all members
                    share the same passion for coding. What are you waiting for? Join us now.
                </p>
                <ButtonContainer>
                    <Button>
                        <NavLink to="/signup">Sign Up Now</NavLink>
                    </Button>
                    <V2Button>
                        <NavLink to="/timeline">Timeline</NavLink>
                    </V2Button>
                </ButtonContainer>
            </LeftHero>
            <RightHero>
                <img src={Computer} alt="" />
            </RightHero>
        </Container>
    );
}

export default Hero;
