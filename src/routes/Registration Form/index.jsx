import { useState, useEffect } from 'react';

import * as Styled from '../Activities/components/Hero/Hero.styled';
import FormRegister from './components/Form';
import RightContent from './components/RightContent';
import SlideShow from './components/SlideShow';

const RegistrationForm = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1365);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1365);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Styled.Container>
            <Styled.ContentRegister>
                <FormRegister />
                {isLargeScreen ? <SlideShow /> : <RightContent />}
            </Styled.ContentRegister>
        </Styled.Container>
    );
};

export default RegistrationForm;
