import { NavLink } from 'react-router-dom';

import Logo from '../Logo';
import { NavLinkStyle, Button } from '../header.style';
import { StyledMenu, LogoContainer, BtnContainer } from './menu.style';

const Menu = (props) => {
    const { setOpen } = props;
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <StyledMenu open={props.open}>
            <LogoContainer>
                <Logo></Logo>
            </LogoContainer>
            <BtnContainer>
                <NavLinkStyle onClick={handleClose} to="/">
                    Home
                </NavLinkStyle>
                <NavLinkStyle onClick={handleClose} to="/activities">
                    Activites
                </NavLinkStyle>
                <NavLinkStyle onClick={handleClose} to="/timeline">
                    Timeline
                </NavLinkStyle>
                <NavLinkStyle onClick={handleClose} to="/faq">
                    FAQ
                </NavLinkStyle>
                <Button>
                    <NavLink onClick={handleClose} to="/register">
                        Register
                    </NavLink>
                </Button>
            </BtnContainer>
        </StyledMenu>
    );
};

// //{' '}
// <RightNav>
//     // <ul></ul>
//     //{' '}
// </RightNav>
export default Menu;
