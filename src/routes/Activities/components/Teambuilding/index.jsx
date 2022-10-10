import * as Styled from './Teambuilding.styled';

const img =
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/310512874_3241145429435347_1307646043115394265_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8s87CROrdrwAX910aPv&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9DZCgLaXTgRvpT8DVHSdVqCjRGwLyOUadz-dSQrImIQw&oe=63485241';

const Teambuilding = () => {
    return (
        <Styled.Wrapper data-aos="fade-up">
            <Styled.Container src={img} alt="Teambuilding" />
            <Styled.Text>
                <Styled.Heading>Teambuilding</Styled.Heading>
                <Styled.Description>
                    <Styled.HighLight>F-Code</Styled.HighLight> will organize a picnic every year to
                    help members bond with each other
                </Styled.Description>
            </Styled.Text>
        </Styled.Wrapper>
    );
};

Teambuilding.propTypes = {};

export default Teambuilding;
