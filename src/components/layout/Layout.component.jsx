import styled from 'styled-components';

import bg from '../../assets/background/background.png';
import Headernew from '../../components/Header/index';
import Footer from '../footer/Footer.component';
import { ContainerStyle } from './style';

import { CssBaseline } from '@mui/material';

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
const Background = styled.div`
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
`;
