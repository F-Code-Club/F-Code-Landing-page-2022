import Logo from '../Logo';
import { NavLinkStyle, Button } from '../header.style';
import { StyledMenu, LogoContainer, BtnContainer } from './menu.style';

const Menu = (props) => {
    return (
        <StyledMenu open={props.open}>
            <LogoContainer>
                <Logo></Logo>
            </LogoContainer>
            <BtnContainer>
                <NavLinkStyle to="/">Home</NavLinkStyle>
                <NavLinkStyle to="/activities">Activites</NavLinkStyle>
                <NavLinkStyle to="/timeline">Timeline</NavLinkStyle>
                <NavLinkStyle to="/faq">FAQ</NavLinkStyle>
                <Button>Register</Button>
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
