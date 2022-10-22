import styled from 'styled-components';

export const StatusContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    &:not(:nth-child(1)):before {
        position: absolute;
        background-color: rgba(171, 171, 171, 0.38);
        content: '';
        width: 41vw;
        height: 1.5px;
        max-width: 380px;
        left: -890%;
        @media screen and (max-width: 940px) {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
        margin-bottom: 1.5rem;
    }
`;

export const Step = styled.h6`
    font-family: 'Roboto', 'sans serif';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: white;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(153.18deg, rgba(56, 255, 76, 0.2) 0%, rgba(81, 223, 95, 0) 167.08%);
    width: 36px;
    height: 36px;
    backdrop-filter: blur(5px);
    border-radius: 50%;
    margin-right: 8px;
    color: #00d17d;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 500px) {
        align-items: center;
    }
`;
export const Title = styled.h5`
    font-family: 'Roboto', 'sans serif';
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
`;

export const Description = styled.p`
    font-family: 'Roboto', 'sans serif';
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
`;
