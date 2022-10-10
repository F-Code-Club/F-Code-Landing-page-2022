import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 96px 0px;
    position: relative;
`;

export const Container = styled.img`
    width: calc(100vw - 96px);
    height: calc((100vw - 96px) / 2);
    margin: auto;
    object-fit: cover;
    border-radius: 16px;
    filter: drop-shadow(5px 4px 13px rgba(0, 0, 0, 0.25));

    ${up('xl')} {
        height: 500px;
        width: 1100px;
    }

    ${down('sm')} {
        width: calc(100vw - 16px);
        height: 150px;
    }
`;

export const Text = styled.div`
    position: absolute;
    top: calc(48px + 96px);
    left: 32px;

    ${up('xl')} {
        width: 675px;
        top: calc(80px + 96px);
        left: calc(80px);
    }

    ${down('sm')} {
        top: calc(16px + 96px);
        left: 16px;
    }
`;

export const Heading = styled.h1`
    font-family: 'GT Walsheim Pro Black';
    font-size: 36px;
    line-height: 125%;
    color: #6ed894;
    margin-bottom: 12px;
`;

export const Description = styled.p`
    color: #fff;
`;

export const HighLight = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: #45ce7c;
`;
