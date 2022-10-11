import * as Styled from './RODE.styled';

const IMG_LIST = [
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/310512874_3241145429435347_1307646043115394265_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8s87CROrdrwAX910aPv&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9DZCgLaXTgRvpT8DVHSdVqCjRGwLyOUadz-dSQrImIQw&oe=63485241',
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/310512874_3241145429435347_1307646043115394265_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8s87CROrdrwAX910aPv&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9DZCgLaXTgRvpT8DVHSdVqCjRGwLyOUadz-dSQrImIQw&oe=63485241',
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/310512874_3241145429435347_1307646043115394265_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8s87CROrdrwAX910aPv&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9DZCgLaXTgRvpT8DVHSdVqCjRGwLyOUadz-dSQrImIQw&oe=63485241',
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/310512874_3241145429435347_1307646043115394265_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8s87CROrdrwAX910aPv&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9DZCgLaXTgRvpT8DVHSdVqCjRGwLyOUadz-dSQrImIQw&oe=63485241',
];

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
