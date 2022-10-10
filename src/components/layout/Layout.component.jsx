import Footer from '../footer/Footer.component';
import Navbar from '../navBar/Navbar.component';
// import Navbar from '../navBar/Navbar.component';
import { Background } from '../navBar/style';
import { ContainerStyle } from './style';

import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
    return (
        <Background>
            <Navbar />
            <ContainerStyle maxWidth="xl">
                <CssBaseline />
                {children}
            </ContainerStyle>
            <Footer />
        </Background>
    );
};

export default Layout;
