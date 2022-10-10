import styled from 'styled-components';

export const Glass = styled.div`
    position: absolute;
    width: ${(props) => props.length};
    height: ${(props) => props.length};

    background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.08) 0%, rgba(21, 21, 21, 0) 100%);
    backdrop-filter: blur(5px);

    border-radius: 121px;
`;
