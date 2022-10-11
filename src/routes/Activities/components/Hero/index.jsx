import { Link } from 'react-router-dom';

import Button from '../../../Home/components/Button';
import Glass from '../Glass';
import * as Styled from './Hero.styled';

const IMG_LIST = [
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/310512874_3241145429435347_1307646043115394265_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8s87CROrdrwAX910aPv&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9DZCgLaXTgRvpT8DVHSdVqCjRGwLyOUadz-dSQrImIQw&oe=63485241',
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/310512874_3241145429435347_1307646043115394265_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8s87CROrdrwAX910aPv&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9DZCgLaXTgRvpT8DVHSdVqCjRGwLyOUadz-dSQrImIQw&oe=63485241',
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/310512874_3241145429435347_1307646043115394265_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8s87CROrdrwAX910aPv&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9DZCgLaXTgRvpT8DVHSdVqCjRGwLyOUadz-dSQrImIQw&oe=63485241',
];

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
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button data-aos="fade-up">Register Now</Button>
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
