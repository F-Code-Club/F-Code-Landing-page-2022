import { NavLink } from 'react-router-dom';
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
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */

    @media (max-width: 1440px) {
        padding: 8px;
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
        text-align: center;
        display: flex;
        align-items: center;
    }
    @media (max-width: 992px) {
        display: none;
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
    margin-top: 50px;
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

export { StyledHeader, Container };
