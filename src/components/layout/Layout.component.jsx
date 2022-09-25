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
                <Section>About F-code</Section>
                <Section>About F-code</Section>
                <Section>About F-code</Section>
                <Section>About F-code</Section>
            </ContainerStyle>
        </Background>
    );
};

export default Layout;
