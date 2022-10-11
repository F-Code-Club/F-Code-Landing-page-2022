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
                    <li>Home</li>
                    <li>Activites</li>
                    <li>TimeLine</li>
                    <li>FAQ</li>
                    <Button>Register</Button>
                </ul>
            </RightNav>
        </Nav>
    );
};

export default Navbar;
