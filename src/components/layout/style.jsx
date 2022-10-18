import bg from '../../assets/background/background.png';

import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

export const ContainerStyle = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin-top: 120px;
`;
export const Background = styled.div`
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
`;
