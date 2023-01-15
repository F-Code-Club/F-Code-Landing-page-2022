import { Link } from 'react-router-dom';

import hero2 from '../../../../assets/images/activities-hero/activities-hero-2.jpg';
import hero3 from '../../../../assets/images/activities-hero/activities-hero-3.jpg';
import hero1 from '../../../../assets/images/rode/rode1.png';
import Button from '../../../Home/components/Button';
import Glass from '../Glass';
import * as Styled from './Hero.styled';

const IMG_LIST = [hero1, hero2, hero3];

const Hero = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.LeftContent>
                    <Styled.Titie data-aos="fade-up">
                        Some <br /> highlight activities of
                        <Styled.HighLight> F-Code.</Styled.HighLight>
                    </Styled.Titie>

                    <Styled.SupportingText data-aos="fade-up">
                        Many interesting activites are waiting for you at
                        <Styled.HighLight> F-Code.</Styled.HighLight> Let’s become a member and
                        participate these activities now.
                    </Styled.SupportingText>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Button>Sign Up Now</Button>
                    </Link>
                </Styled.LeftContent>

                <Styled.RightContent data-aos="fade-left">
                    <Styled.GlassTop>
                        <Glass length="100px" />
                    </Styled.GlassTop>
                    <Styled.GlassLeft>
                        <Glass length="50px" />
                    </Styled.GlassLeft>
                    <Styled.GlassCenter>
                        <Glass length="135px" />
                    </Styled.GlassCenter>
                    <Styled.GlassRight>
                        <Glass length="150px" />
                    </Styled.GlassRight>
                    <Styled.TopImg img={IMG_LIST[0]} />
                    <Styled.LeftImg img={IMG_LIST[1]} />
                    <Styled.RightImg img={IMG_LIST[2]} />
                </Styled.RightContent>
            </Styled.Content>
        </Styled.Container>
    );
};

Hero.propTypes = {};

export default Hero;
