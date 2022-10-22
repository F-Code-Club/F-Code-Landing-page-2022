import { NavLink } from 'react-router-dom';

import { ReactComponent as FCodeLogo } from '../../../assets/logo.svg';
import { StyledLogo, LText } from './logo.style';

const Logo = () => {
    return (
        <NavLink to="/">
            <StyledLogo>
                <FCodeLogo width={70} height={70} />
                <LText>F-Code</LText>
            </StyledLogo>
        </NavLink>
    );
};

export default Logo;
