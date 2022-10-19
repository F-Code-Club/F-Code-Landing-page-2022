import React from 'react';

import BlankButton from '../BlankButton';
import FilledButton from '../FilledButton';
import { StyledNavBar } from './navBar.style';

const NavBar = () => {
    return (
        <StyledNavBar>
            <BlankButton>Trang chủ</BlankButton>
            <BlankButton>Hoạt động</BlankButton>
            <BlankButton>Timeline</BlankButton>
            <BlankButton>FAQ</BlankButton>
            <FilledButton>ĐĂNG KÍ</FilledButton>
        </StyledNavBar>
    );
};

export default NavBar;
