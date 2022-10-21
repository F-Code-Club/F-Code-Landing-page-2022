import teambuilding from '../../../../assets/images/teambuilding.jpg';
import * as Styled from './Teambuilding.styled';

const Teambuilding = () => {
    return (
        <Styled.Wrapper data-aos="fade-up">
            <Styled.Container src={teambuilding} alt="Teambuilding" />
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
