import { NavLink } from 'react-router-dom';
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
    z-index: 99;
    img {
        margin-right: 32px;
        width: ${px2vw(71)};
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
export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    color: #45ce7c;
    height: 32px;
`;
export const RightNav = styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    ul {
        text-align: center;
        display: flex;
        align-items: center;
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
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: auto;
    padding: 10px 20px;
    /* background: gray;    */
    background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.08) 0%, rgba(21, 21, 21, 0.09) 100%);
    backdrop-filter: blur(10px);
    border-radius: 16px;
`;

export const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 8px;
    color: #000;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    margin-right: 32px;
    cursor: pointer;
    list-style: none;
    transition: all 0.2s;
    &:hover {
        background: #45ce7c;
        color: white;
    }
`;
