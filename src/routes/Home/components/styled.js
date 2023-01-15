import { down, up } from 'styled-breakpoints';
import styled, { keyframes } from 'styled-components';

import arrows from '../../../assets/components';

const flow = keyframes`
    from, to {
        transform: translateY(0)
    }

    25% {
        transform: translateY(10px)
    }

    75% {
        transform: translateY(-10px)

    }
`;

export const Container = styled.section`
    max-width: 1100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 84px 0;
    ${down('lg')} {
        flex-direction: column;
        align-items: center;
    }
`;

export const Highlight = styled.span`
    color: #45ce7c;
    font-weight: 600;
    font-size: 22px;
`;

export const EstablishPart = styled.div`
    display: flex;
`;

export const LeftHero = styled.div`
    h1 {
        font-family: 'GT Walsheim Pro Black';
        font-style: normal;
        font-weight: 900;
        font-size: 60px;
        line-height: 65px;
        margin-bottom: 24px;
    }
    p {
        font-family: 'GT Walsheim Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        max-width: 542px;
        margin-bottom: 60px;
    }
    span {
        font-family: 'GT Walsheim Pro Black';
    }
    span:last-child {
        font-family: 'GT Walsheim Pro Black';
        color: #45ce7c;
    }

    ${down('lg')} {
        margin-bottom: 40px;
    }

    ${down('sm')} {
        h1 {
            font-size: 52px;
        }
    }
`;
export const ButtonContainer = styled.div`
    display: flex;
`;
export const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    color: white;
    min-width: 131px;
    height: 35px;
    cursor: pointer;
    a {
        color: #fff;
        text-decoration: none;
    }
    &:hover {
        filter: brightness(95%);
    }
    /* Green/400 */

    background: #45ce7c;
    border-radius: 8px;
    margin-right: 16px;
`;
export const V2Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    cursor: pointer;
    width: 98px;
    height: 35px;
    border: 1px solid #1f2a37;
    border-radius: 8px;

    a {
        color: #000;
        text-decoration: none;
    }
`;
export const RightHero = styled.div`
    img {
        margin-top: -60px;
        margin-right: -24px;
        animation: ${flow} 3s linear infinite;
    }

    ${down('md')} {
        display: none;
    }
`;
export const Box = styled.div`
    width: 200px;
    height: 200px;
    background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.08) 0%, rgba(21, 21, 21, 0) 100%);
    backdrop-filter: blur(5px);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    ${down('md')} {
        margin: 48px auto;
    }
    ${down('lg')} {
        width: 50vw;
    }

    h2 {
        font-family: 'GT Walsheim Pro Black';
        font-weight: 900;
        font-size: 48px;
        line-height: 55px;
        letter-spacing: 0.04em;
        margin-bottom: 0;
        color: #45ce7c;
    }
    h5 {
        font-family: 'GT Walsheim Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.04em;

        color: rgba(21, 21, 21, 0.5);
    }
`;
const rotate = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
`;
export const Direct = styled.div`
    a {
        text-decoration: none;
        &:hover {
            svg {
                animation: ${rotate} linear 2s;
            }
        }
    }
    h4 {
        font-size: 16px !important;
        display: flex;
        align-items: center;
        margin-bottom: 12px !important;
    }
`;
export const RightPart = styled.div`
    font-family: 'GT Walsheim Pro';
    font-size: 22px;
    line-height: 150%;
    margin: 0;
    h3 {
        font-size: 18px;
        font-weight: 300;
        color: #6b7280;
        max-width: 640px;
        span {
            font-size: 22px;
            color: #45ce7c;
            font-family: 'GT Walsheim Pro Black';
        }
        strong {
            font-weight: 900;
        }
        margin-bottom: 48px;
    }
    h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        color: #45ce7c;
        margin-bottom: 16px;
        svg {
            margin-left: 8px;
        }
    }
    h1 {
        font-family: 'GT Walsheim Pro Black';
        margin-bottom: 16px;
        font-size: 36px;
    }
`;
export const SlideArrow = styled.div`
    position: absolute;
    display: block;
    background-color: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease-in-out;

    &::before {
        position: absolute;
        content: '';
        width: 9px;
        height: 14px;
        right: 18px;
        bottom: 14.5px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;
export const VericalContainer = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: center;
`;
export const LeftArrow = styled(SlideArrow)`
    left: 3px;
    z-index: 999;
    &::before {
        background: url(${arrows['left-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
    @media screen and (max-width: 920px) {
        display: none;
    }
`;

export const RightArrow = styled(SlideArrow)`
    right: 5px;
    z-index: 10000;
    &::before {
        background: url(${arrows['right-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }

    @media screen and (max-width: 920px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    text-align: center;
    margin: 70px 0;
    max-width: 1100px;

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
        }
    }
`;
export const SliderContainer = styled.div`
    position: relative;
    margin: 32px auto 0;
    max-width: 1100px;
    width: 900px;
    margin-top: 32px;

    @media screen and (max-width: 1440px) {
        width: 900px;
    }
    @media screen and (max-width: 1000px) {
        width: 430px;
        overflow-x: hidden;
    }
    @media screen and (max-width: 560px) {
        width: auto;
        overflow-x: hidden;
    }
`;
export const SliderContent = styled.div`
    text-align: center;
    margin: 0 auto;
    @media screen and (max-width: 1440px) {
        align-items: center;
        width: 100%;
        /* padding: 0 1rem; */
    }
`;
export const Image = styled.img`
    position: relative;
    background-size: contain;
    object-fit: cover;
    width: 400px;
    height: 270px;
    margin: 12px;
    overflow: hidden;
    border-radius: 15px;
    margin: 0.5rem;
    background-repeat: no-repeat;
    @media screen and (max-width: 560px) {
        margin: 0;
        width: 330px;
        /* height: auto; */
    }
`;
export const Activities = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 4rem 0;
`;
export const SubTitle = styled.h6`
    display: block;
    font-family: 'GT Walsheim Pro Black';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;

    letter-spacing: -0.01em;
    color: #111928;
    ${down('xl')} {
        font-size: 30px;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding: 0 4em; */
    margin: 0 auto;
    height: 100%;
`;
export const ContentsContainer = styled(Content)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 8rem; */
    width: 100%;
    @media screen and (max-width: 1440px) {
        align-items: center;
        padding: 0 4rem;
    }
    @media screen and (max-width: 560px) {
        font-size: 14px;
        padding: 0 1.4rem;
    }
`;
export const MiniTitle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-size: 18px;
    line-height: 125%;
    text-align: center;
    display: flex;
    align-items: center;
    text-align: center;

    letter-spacing: -0.01em;

    color: #45ce7c;
    text-align: center;
`;
export const SlideWrapper = styled.div`
    text-align: center;
`;
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    & p {
        margin: auto;
        margin-bottom: 12px;
    }
`;
export const Description = styled.p`
    margin: 10px auto 0;
    /* 
    & span {
        font-family: inherit;
        color: #45ce7c;
        font-weight: bold;
        font-size: 20px;
    } */

    ${up('lg')} {
        width: 800px;
    }
    ${down('sm')} {
        width: 400px;
    }
`;
