import * as Styled from '../Activities/components/Hero/Hero.styled';
import FormRegister from './components/Form';
import RightContent from './components/RightContent';

const RegistrationForm = () => {
    return (
        <Styled.Container>
            <Styled.ContentRegister>
                <FormRegister />
                <RightContent />
            </Styled.ContentRegister>
        </Styled.Container>
    );
};

export default RegistrationForm;
