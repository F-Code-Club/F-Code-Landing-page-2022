import styled from 'styled-components';

import bg from '../../assets/background/background.png';
import px2vw from '../../utils/px2vw';

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
export const Section = styled.section`
    background-color: transparent;
    width: 100%;
    min-height: 100vh;
    @media (min-width: 1200px) {
        max-width: ${px2vw(1260)};
    }
`;

export const Background = styled.div`
    overflow-x: hidden;

    width: 100%;
    min-height: 100vh;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
`;
