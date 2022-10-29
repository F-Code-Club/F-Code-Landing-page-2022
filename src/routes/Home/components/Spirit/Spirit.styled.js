import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px 0px;
    gap: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    ${up('xl')} {
        min-width: 1100px;
    }

    ${down('lg')} {
        max-width: 600px;
    }
`;

export const Heading = styled.h1`
    font-family: 'GT Walsheim Pro Black';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;
    display: flex;
    align-items: center;
`;

export const SupportingText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;

    height: 33px;
    margin: 16px 0;

    color: #6b7280;
`;

export const CardContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${up('xl')} {
        justify-content: space-between;
    }

    ${up('xl')} {
        padding: 30px 70px;
    }

    flex-wrap: wrap;
    padding: 30px 0;
    gap: 16px;
`;

export const Card = styled.li`
    padding: 25px;

    width: 200px;

    /* ${down('md')} {
        width: auto;
    } */

    background: linear-gradient(152.97deg, rgba(105, 105, 105, 0.2) 0%, rgba(21, 21, 21, 0) 100%);

    backdrop-filter: blur(5px);

    border-radius: 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
    list-style: none;
    transition: all 0.1s ease-in-out 0s;
    cursor: pointer;

    &:hover {
        transform: translateY(-12px);
        transition-duration: 0.3s !important;
    }
`;

export const Icon = styled.div`
    color: #00c464;
`;

export const CardHeading = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    margin-top: 10px;
    color: #00c464;
`;

export const Separator = styled.div`
    width: 150px;
    height: 0px;
    margin-top: 15px;

    border: 1px solid rgba(171, 171, 171, 0.38);
`;

export const Content = styled.p`
    margin-top: 40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`;
