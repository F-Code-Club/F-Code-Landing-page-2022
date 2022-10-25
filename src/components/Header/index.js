import { useRef, useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import Burger from './Burger';
import FillGround from './FillGround';
import useScrollListener from './Hook/Hook';
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
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push('nav-bar--hidden');

        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);
    const menu = useRef();
    const styles = {
        active: {
            visibility: 'visible',
            transition: 'all 0.5s',
        },
        hidden: {
            visibility: 'hidden',
            transition: 'all 0.5s',
            transform: 'translateY(-120%)',
        },
    };
    useOnClickOutside(menu, () => setOpen(false));

    return (
        <Container>
            <StyledHeader ref={menu} className={navClassList.join(' ')}>
                <NavContainer>
                    <Logo></Logo>

                    <RightNav>
                        <ul>
                            <NavLinkStyle to="/">Home</NavLinkStyle>
                            <NavLinkStyle to="/activities">Activites</NavLinkStyle>
                            <NavLinkStyle to="/timeline">Timeline</NavLinkStyle>
                            <NavLinkStyle to="/faq">FAQ</NavLinkStyle>
                            <Button>
                                <NavLink to="/signup">Register</NavLink>
                            </Button>
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
