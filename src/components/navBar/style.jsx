import styled from 'styled-components';

import bg from '../../assets/background/background.png';

export const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 1000px;
    height: 70px;
    width: 100%;
    background: gray;
    z-index: 100;
`;

export const Background = styled.div`
    width: 100%;
    min-height: 100vh;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
`;
