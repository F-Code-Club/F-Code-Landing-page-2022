import styled from 'styled-components';

import px2vw from '../../utils/px2vw';

export const Section = styled.section`
    background-color: transparent;
    width: 100%;
    min-height: 100vh;
    @media (min-width: 1200px) {
        max-width: ${px2vw(1260)};
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
