import netcompany from '../../../../assets/images/telescope/netcompany.jpg';
import poster from '../../../../assets/images/telescope/poster.jpg';
import recap from '../../../../assets/images/telescope/recap.jpg';
import * as Styled from './Telescope.styled';

const IMG_LIST = [recap, poster, netcompany];

const Telescope = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Stats>
                    <Styled.LeftImg img={IMG_LIST[0]} data-aos="fade-right" />
                    <Styled.TopRightImg img={IMG_LIST[1]} data-aos="fade-down" />
                    <Styled.BottomRightImg img={IMG_LIST[2]} data-aos="fade-up" />
                </Styled.Stats>

                <div>
                    <Styled.Subheading data-aos="fade-down">Talkshow</Styled.Subheading>
                    <Styled.Heading data-aos="fade-down">Talkshow Telescope</Styled.Heading>
                    <Styled.Description data-aos="fade-up">
                        <Styled.HighLight>F-Code</Styled.HighLight>, established in 2014, is the
                        first academic club of
                        <strong> FPT University</strong> at
                        <strong> Ho Chi Minh City</strong>. With the initial aim of creating a
                        community for Software Engineering major’s students, <strong>F-Code</strong>{' '}
                        allows them to share and improve skills that are neccesary for developers.
                        After 5 years, <strong>F-Code</strong> has offered various activites to
                        students.
                    </Styled.Description>
                </div>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

Telescope.propTypes = {};

export default Telescope;
