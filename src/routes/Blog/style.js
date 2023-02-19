import styled from 'styled-components';

export const Hero = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 65px;
    margin-bottom: 60px;
    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        color: #45ce7c;
    }
`;
export const LoadMoreBtn = styled.div`
    align-items: center;
    padding: 8px 12px;
    background-color: #45ce7c;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    &:hover {
        background-color: #37a463;
    }
`;
