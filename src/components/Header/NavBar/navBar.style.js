import styled from 'styled-components';

export const StyledNavBar = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    width: 516px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
        display: none;
    }
`;
