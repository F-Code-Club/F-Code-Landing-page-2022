import Headernew from '../../components/Header/index';
import Footer from '../footer/Footer.component';
import { ContainerStyle, Background } from './style';

import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
    return (
        <Background>
            <Headernew />
            <ContainerStyle maxWidth={false}>
                <CssBaseline />
                {children}
            </ContainerStyle>
            <Footer />
        </Background>
    );
};

export default Layout;
