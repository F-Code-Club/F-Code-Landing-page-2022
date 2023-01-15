import { NavLink, Link } from 'react-router-dom';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 0px 64px;
    align-items: center;
    background: transparent;
    transition: transform 0.5s ease-in-out;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    &.nav-bar--hidden {
        transition: all 0.5s;

        transform: translateY(-150%);
    }
    @media (max-width: 1440px) {
        padding: 8px;
    }
    @media (max-width: 992px) {
        background: linear-gradient(
            152.97deg,
            rgba(21, 21, 21, 0.08) 0%,
            rgba(21, 21, 21, 0.09) 100%
        );
        height: 80px;

        backdrop-filter: blur(10px);
    }
`;

const Container = styled.div`
    width: 100%;
`;
export const RightNav = styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    ul {
        width: 450px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > a.active {
            color: #45ce7c;
            border-bottom: 3px solid #45ce7c;
            border-radius: 0px;
            &:hover {
                border-radius: 8px;
                color: #ffffff;
            }
        }
    }
    @media (max-width: 992px) {
        display: none;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: auto;
    margin-top: 50px;
    padding: 10px 20px;
    /* background: gray;    */
    background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.08) 0%, rgba(21, 21, 21, 0.09) 100%);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    @media (max-width: 992px) {
        /* width: 100%; */
        /* padding: 30px 20px; */
        background: transparent;
        margin-top: 0px;
        margin-left: 60px;
        backdrop-filter: blur(0px);
    }
    @media (max-width: 992px) {
        margin-left: 0px;
    }
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
    /* margin-right: 32px; */
    text-align: center;
    cursor: pointer;
    list-style: none;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #45ce7c;
        color: white;
    }

    ${down('lg')} {
        margin-right: 0;
        height: 45px;
    }
`;
export const Button = styled(NavLinkStyle)`
    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    width: 100%;
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
        color: #fff;
        text-decoration: none;
    }
    ${down('lg')} {
        height: 45px;
    }
`;
export const ButtonHeader = styled(Link)`
    /* Auto layout */

    display: flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    width: 81px;
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
        color: #fff;
        text-decoration: none;
    }
    ${down('lg')} {
        height: 45px;
    }
`;

export { StyledHeader, Container };
