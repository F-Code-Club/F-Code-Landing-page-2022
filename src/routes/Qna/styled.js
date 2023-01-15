import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Container = styled.section`
    max-width: 700px;
    width: 100%;
    margin-top: 40px;
`;
export const Hero = styled.h1`
    font-family: 'GT Walsheim Pro black';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;
    text-align: center;
    width: 100%;
    margin-bottom: 32px;
    /* gray/900 */

    color: #111928;
`;
export const Section = styled.div`
    margin-bottom: 64px;
`;
export const Input = styled.div`
    display: flex;
    justify-content: center;
    button {
        cursor: pointer;
        &:hover {
            background-color: #37a463;
        }
    }
    ${down('md')} {
        display: flex;
        flex-direction: column;
        input {
            width: 100% !important;
        }
        button {
            width: 100% !important;
        }
    }
    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px 110px 15px 25px;
        gap: 10px;
        margin-right: 12px;
        width: 451px;
        height: 54px;
        border-radius: 10px;
        background-color: transparent;
    }
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 20px;
        width: 140px;
        height: 54px;
        color: #fff;
        background: #45ce7c;
        border-radius: 8px;
        border: none;
        font-size: 14px;
    }
    margin-bottom: 64px;
`;
export const Demo = styled.div``;
export const Question = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #111928;
    margin-bottom: 15px;
`;
export const Ans = styled.div`
    margin-bottom: 68px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.6);
`;
