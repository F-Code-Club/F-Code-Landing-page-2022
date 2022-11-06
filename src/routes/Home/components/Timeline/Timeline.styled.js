import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
    gap: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 64px;

    ${up('xl')} {
        width: 1100px;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;

    height: 88px;
`;

export const Heading = styled.h1`
    font-family: 'GT Walsheim Pro Black';
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;

    display: flex;
    align-items: center;
    text-align: center;

    color: #1b1b1b;
`;

export const Subheading = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    text-align: center;

    color: #6b7280;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    gap: 10px;
    ${down('lg')} {
        width: 500px;
        overflow: hidden;
        flex-wrap: wrap;
    }
    ${down('xl')} {
        width: 600px;
        overflow: hidden;
        flex-wrap: wrap;
    }

    ${down('md')} {
        width: 300px;
        overflow: hidden;
        flex-wrap: wrap;
    }

    ${up('xl')} {
        width: 800px;
    }

    /* height: 200px; */

    /* glassmorphism */

    background: linear-gradient(152.97deg, rgba(105, 105, 105, 0.2) 0%, rgba(21, 21, 21, 0) 100%);
    border-radius: 16px;
    transition: all 0.4s ease-in-out 0s;

    &:not(:last-child) {
        margin-bottom: 40px;
    }

    ${(props) => props.status !== 'ACTIVE' && 'filter: grayscale(100%); opacity: 0.75'};

    &:hover {
        transform: translateX(14px);
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    overflow: hidden;
    ${up('xl')} {
        width: 537px;
    }

    height: 137px;
`;
export const Right = styled.div``;

export const CardHeading = styled.div`
    font-family: 'GT Walsheim Pro Black';
    font-weight: 800;
    font-size: 26px;
    line-height: 150%;
    color: #00c464;
`;

export const CardSubheading = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
`;

export const WrapperButton = styled.div`
    padding: 0 24px 16px;
    display: flex;
    justify-content: flex-end;
`;
