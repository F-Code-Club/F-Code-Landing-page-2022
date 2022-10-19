import * as Styled from './Telescope.styled';

const IMG_LIST = [
    'https://th.bing.com/th/id/OIP.nGSEh_PGq3vs7w16VkE04QHaFj?w=260&h=196&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.r16mCLlX0OgB1TbKKD2GAAHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.YwPNGDIPW3kWRPiMLAio4wHaEo?w=260&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
];

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
