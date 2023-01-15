import { up, down, between } from 'styled-breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${up('xl')} {
        width: 1100px;
    }
`;
export const ContentRegister = styled(Content)`
    align-items: flex-start;
`;
export const LeftContent = styled.div``;

export const RightContent = styled.div`
    display: flex;
    position: relative;
    min-width: 595px;
    height: 491px;
    box-sizing: border-box;

    ${down('lg')} {
        display: none;
    }

    ${between('lg', 'xl')} {
        min-width: 525px;
    }
`;

export const Titie = styled.h1`
    font-family: 'GT Walsheim Pro Black';
    width: 409px;
    font-size: 60px;
    line-height: 65px;
    color: #1b1b1b;

    ${down('sm')} {
        width: auto;
    }
`;

export const HighLight = styled.span`
    font-family: inherit;
    color: #45ce7c;
    font-weight: bold;
`;

export const SupportingText = styled.p`
    width: 475px;

    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #6b7280;

    margin-bottom: 60px;
    margin-top: 18px;

    ${down('sm')} {
        width: auto;
    }
`;

export const GlassTop = styled.div`
    z-index: 1;
    position: absolute;
    left: 134px;
    top: 0px;
`;

export const GlassLeft = styled.div`
    z-index: 1;
    position: absolute;
    top: 395px;
    left: 0;
`;

export const GlassRight = styled.div`
    z-index: 3;
    position: absolute;
    right: 0;
    bottom: 16px;
    width: 150px;
    height: 150px;
`;

export const GlassCenter = styled.div`
    z-index: 1;
    position: absolute;
    left: 141px;
    top: 213px;
`;

export const Img = styled.div`
    position: absolute;
    border-radius: 1000px;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
`;

export const TopImg = styled(Img)`
    width: 304px;
    height: 304px;
    left: 141px;
    top: 17px;
`;

export const LeftImg = styled(Img)`
    width: 192px;
    height: 192px;
    left: 31px;
    bottom: 21px;
`;

export const RightImg = styled(Img)`
    width: 304px;
    height: 304px;
    bottom: 0;
    right: 35px;
    z-index: 2;
`;
