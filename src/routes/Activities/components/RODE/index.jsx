import rode1 from '../../../../assets/images/rode/rode1.png';
import rode2 from '../../../../assets/images/rode/rode2.png';
import rode3 from '../../../../assets/images/rode/rode3.jpg';
import rode4 from '../../../../assets/images/rode/rode4.jpg';
import * as Styled from './RODE.styled';

const IMG_LIST = [rode1, rode2, rode3, rode4];

const RODE = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <div>
                    <Styled.Subheading data-aos="fade-down">Competition</Styled.Subheading>
                    <Styled.Heading data-aos="fade-down">R.ODE Battle</Styled.Heading>
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

                <Styled.Stats>
                    <Styled.TopLeftImg img={IMG_LIST[0]} data-aos="fade-down-right" />
                    <Styled.BottomLeftImg img={IMG_LIST[1]} data-aos="fade-up-right" />
                    <Styled.TopRightImg img={IMG_LIST[2]} data-aos="fade-down-left" />
                    <Styled.BottomRightImg img={IMG_LIST[3]} data-aos="fade-up-left" />
                </Styled.Stats>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

RODE.propTypes = {};

export default RODE;
