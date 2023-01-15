import styled from 'styled-components';

import bg from '../../assets/background/background.png';
import px2vw from '../../utils/px2vw';

export const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    height: 119px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    img {
        margin-right: 32px;
        width: ${px2vw(71)};
    }
`;
export const Section = styled.section`
    background-color: transparent;
    width: 100%;
    min-height: 100vh;
    @media (min-width: 1200px) {
        max-width: ${px2vw(1260)};
    }
`;

export const Background = styled.div`
    overflow-x: hidden;

    width: 100%;
    min-height: 100vh;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
`;
export const LeftNav = styled.div`
    display: flex;
    align-items: center;

    h2 {
        font-family: 'GT Walsheim Pro';
        font-weight: 700;
        font-size: 24px;
        line-height: 150%;
    }
`;
export const RightNav = styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    ul {
        text-align: center;
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
            color: #000;
            font-family: 'Inter';
            display: flex;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            cursor: pointer;
            list-style: none;
            margin-right: 32px;

            &:hover {
                color: #1c1c1c;
            }
        }
    }
`;
export const Button = styled.div`
    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;

    width: 81px;
    height: 37px;

    background-color: #45ce7c;
    border-radius: 8px;
    cursor: pointer;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    &:hover {
        background-color: #37a463;
    }
    a {
        margin-right: 0 !important;
        color: #fff !important;
    }
`;
