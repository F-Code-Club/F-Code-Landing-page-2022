import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    margin: 50px 0;

    & h4 {
        font-family: 'Inter';
        font-weight: 500;
        font-size: 18px;
        line-height: 125%;
        color: #45ce7c;
        margin-bottom: 10px;
    }

    & h1 {
        margin-bottom: 10px;
        font-size: 36px;
    }

    & p {
        font-size: 16px;
        margin-bottom: 32px;

        & span {
            color: #45ce7c;
            font-weight: 900;
            font-size: 20px;
        }
    }
`;
