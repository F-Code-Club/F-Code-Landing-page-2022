import { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

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

    return (
        <Container>
            <StyledHeader ref={menu}>
                <NavContainer>
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: '#000000',
                        }}
                        to="/"
                    >
                        <Logo></Logo>
                    </Link>
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
                <Burger open={open} setOpen={setOpen}></Burger>
                <Menu open={open} setOpen={setOpen}></Menu>
            </StyledHeader>
            <FillGround open={open} setOpen={setOpen}></FillGround>
        </Container>
    );
};

export default Headernew;
