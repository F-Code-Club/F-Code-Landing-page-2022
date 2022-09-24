import HeroSection from '../hero/Hero.component';
import Navbar from '../navBar/Navbar.component';
import { ContainerStyle } from './style';

import CssBaseline from '@mui/material/CssBaseline';

// import { Container } from '@mui/system';

const Layout = () => {
    return (
        <div className="background">
            <ContainerStyle maxWidth="xl">
                <CssBaseline />
                <Navbar />
                <HeroSection />
            </ContainerStyle>
        </div>
    );
};

export default Layout;
