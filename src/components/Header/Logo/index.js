import { ReactComponent as FCodeLogo } from '../../../assets/logo.svg';
import { StyledLogo, LText } from './logo.style';

const Logo = () => {
    return (
        <StyledLogo>
            <FCodeLogo width={50} height={50} />
            <LText>F-Code</LText>
        </StyledLogo>
    );
};

export default Logo;
