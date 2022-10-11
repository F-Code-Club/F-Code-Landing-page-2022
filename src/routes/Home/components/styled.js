import styled from 'styled-components';

import arrows from '../../../assets/components';
import px2vw from '../../../utils/px2vw';

export const Container = styled.section`
    max-width: 90vw;
    width: 100%;
    height: ${px2vw(550)};
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
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
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
        max-width: 542px;
        margin-bottom: 24px;
    }
    span {
        color: #45ce7c;
    }
`;
export const ButtonContainer = styled.div`
    display: flex;
    div {
        margin: 8px;
    }
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
    &:hover {
        filter: brightness(95%);
    }
    /* Green/400 */

    background: #45ce7c;
    border-radius: 8px;
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
`;
export const RightHero = styled.div``;
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
    h2 {
        font-family: 'GT Walsheim Pro';
        font-style: normal;
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
export const Direct = styled.div`
    h4 {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }
`;
export const RightPart = styled.div`
    font-family: 'GT Walsheim Pro';
    font-size: 22px;
    line-height: 150%;
    margin: 0;
    h3 {
        font-weight: 300;
        color: #6b7280;
        max-width: 640px;
        span {
            color: #45ce7c;
        }
        strong {
            font-weight: 900;
        }
    }
    h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        color: #45ce7c;
    }
    h1 {
        font-family: 'GT Walsheim Pro Black';
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    max-width: 90vw;
`;
export const LeftArrow = styled(SlideArrow)`
    left: 15px;
    z-index: 999;
    &::before {
        background: url(${arrows['left-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
    @media screen and (max-width: 520px) {
        display: none;
    }
`;

export const RightArrow = styled(SlideArrow)`
    right: 20px;
    z-index: 999;
    &::before {
        background: url(${arrows['right-arrow.svg']});
        background-repeat: no-repeat;
        background-size: stretch;
    }
    @media screen and (max-width: 1440px) {
        right: 45px;
    }
    @media screen and (max-width: 1000px) {
        right: 25px;
    }
    @media screen and (max-width: 520px) {
        display: none;
    }
`;
