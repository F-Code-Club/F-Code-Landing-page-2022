import * as Styled from '../Activities/components/Hero/Hero.styled';
import FormRegister from './components/Form';
import RightContent from './components/RightContent';
import SlideShow from './components/SlideShow';

const RegistrationForm = () => {
    return (
        <Styled.Container>
            <Styled.ContentRegister>
                <FormRegister />
                {/* <RightContent /> */}
                <SlideShow />
            </Styled.ContentRegister>
        </Styled.Container>
    );
};

export default RegistrationForm;
