import { useRef, useState } from 'react';

import Burger from './Burger';
import FillGround from './FillGround';
import Logo from './Logo';
import Menu from './Menu';
import {
    NavContainer,
    RightNav,
    NavLinkStyle,
    Button,
    StyledHeader,
    Container,
} from './header.style';
import { useOnClickOutside } from './hooks';

const Headernew = () => {
    let [open, setOpen] = useState(false);

    const menu = useRef();
    useOnClickOutside(menu, () => setOpen(false));
    // <NavBar></NavBar>

    return (
        <Container>
            <StyledHeader ref={menu}>
                <NavContainer>
                    <Logo></Logo>
                    <RightNav>
                        <ul>
                            <NavLinkStyle to="/">Home</NavLinkStyle>
                            <NavLinkStyle to="/activities">Activites</NavLinkStyle>
                            <NavLinkStyle to="/timeline">Timeline</NavLinkStyle>
                            <NavLinkStyle to="/faq">FAQ</NavLinkStyle>
                            <Button>Register</Button>
                        </ul>
                    </RightNav>
                    <Burger open={open} setOpen={setOpen}></Burger>
                </NavContainer>
                <Menu open={open} setOpen={setOpen}></Menu>
            </StyledHeader>
            <FillGround open={open} setOpen={setOpen}></FillGround>
        </Container>
    );
};

export default Headernew;
