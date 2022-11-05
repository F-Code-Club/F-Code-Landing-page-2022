import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';
import { Nav, LeftNav, RightNav, Button } from './style';

const Navbar = () => {
    return (
        <Nav>
            <LeftNav>
                <img src={logo} alt="" />
                <h2>F-Code</h2>
            </LeftNav>
            <RightNav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/activities">Activites</NavLink>
                    <NavLink to="/timeline">Timeline</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                    <Button>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </Button>
                </ul>
            </RightNav>
        </Nav>
    );
};

export default Navbar;
