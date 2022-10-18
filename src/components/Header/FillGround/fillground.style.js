import styled from 'styled-components';

const StyledFillGround = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.open ? 'block' : 'none')};
    transition: all 0.3s;
`;

export { StyledFillGround };
