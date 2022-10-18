import { NavLink } from 'react-router-dom';

import { ReactComponent as FCodeLogo } from '../../assets/logo.svg';
import { Nav, Logo, NavContainer, NavLinkStyle, RightNav, Button } from './style';

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <Logo>
                    <FCodeLogo width={50} height={50} />F - Code
                </Logo>
                <RightNav>
                    <ul>
                        <NavLinkStyle to="/">Home</NavLinkStyle>
                        <NavLinkStyle to="/activities">Activites</NavLinkStyle>
                        <NavLinkStyle to="/timeline">Timeline</NavLinkStyle>
                        <NavLinkStyle to="/faq">FAQ</NavLinkStyle>
                        <Button>Register</Button>
                    </ul>
                </RightNav>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
