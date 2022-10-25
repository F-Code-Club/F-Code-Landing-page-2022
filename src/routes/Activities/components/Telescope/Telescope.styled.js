import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px 0px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1100px;

    ${down('xl')} {
        width: auto;
        flex-direction: column;
    }
`;

export const Stats = styled.div`
    position: relative;
    width: 550px;
    height: 450px;

    ${down('sm')} {
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export const Img = styled.div`
    position: absolute;

    backdrop-filter: blur(5px);
    border-radius: 16px;
    background-position: center;
    background-size: cover;

    ${down('sm')} {
        position: relative;
        margin-bottom: 32px;
        width: calc(100vw - 96px) !important;
        height: calc(100vw - 96px) !important;
    }
`;

export const LeftImg = styled(Img)`
    width: 300px;
    height: 450px;
    left: 0px;
    top: 0px;
    background-image: url(${(props) => props.img});

    ${down('sm')} {
        left: unset;
        top: unset;
    }
`;

export const TopRightImg = styled(Img)`
    width: 200px;
    height: 200px;
    right: 0px;
    top: 0px;
    background-image: url(${(props) => props.img});

    ${down('sm')} {
        right: unset;
        top: unset;
    }
`;
export const BottomRightImg = styled(Img)`
    width: 200px;
    height: 200px;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.img});

    ${down('sm')} {
        right: unset;
        bottom: unset;
    }
`;

export const RightContent = styled.div``;

export const Subheading = styled.h3`
    font-family: 'Inter';
    font-size: 18px;
    line-height: 18px;
    color: #45ce7c;
    margin-bottom: 16px;

    ${down('xl')} {
        margin-top: 96px;
    }
`;

export const Heading = styled.h1`
    font-family: 'GT Walsheim Pro Black';
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;
    color: #1b1b1b;
    margin-bottom: 16px;
`;

export const Description = styled.p`
    width: 442px;
    font-size: 18px;
    ${down('sm')} {
        width: auto;
    }
`;

export const HighLight = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: #45ce7c;
`;
