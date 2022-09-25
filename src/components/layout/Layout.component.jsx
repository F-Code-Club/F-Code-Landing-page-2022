import Navbar from '../navBar/Navbar.component';
import { Section, Background } from '../navBar/style';
import { ContainerStyle } from './style';

import CssBaseline from '@mui/material/CssBaseline';

const Layout = () => {
    return (
        <Background>
            <ContainerStyle maxWidth="xl">
                <CssBaseline />
                <Navbar />
                <Section>Hero section here</Section>
                <Section>About F-code</Section>
                <Section>Activities F-code</Section>
                <Section>F-code spirit</Section>
                <Section>F-code Time line</Section>
                <Section>footer</Section>
            </ContainerStyle>
        </Background>
    );
};

export default Layout;
