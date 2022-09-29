import FCode from '../../../../assets/f-code.svg';
import * as Styled from './Footer.styled';

import { IoLogoFacebook, IoDocumentText, IoLogoYoutube, IoLogoDiscord } from 'react-icons/io5';

const Footer = () => {
    return (
        <Styled.Wrapper>
            <Styled.Logo>
                <Styled.Icon src={FCode} alt="F-Code" />
                <Styled.LogoTitle>F-Code Information Portal</Styled.LogoTitle>
            </Styled.Logo>

            <Styled.Copyright>
                <p>
                    Sponsored by <strong>LTVNHosting</strong>
                </p>
                <p>
                    © 2022 <strong>F-Code</strong>. All rights reserved
                </p>
            </Styled.Copyright>

            <Styled.SocialLinks>
                <a href="https://www.facebook.com/fcodefpt">
                    <IoLogoFacebook />
                </a>
                <a href="https://www.youtube.com/channel/UCZyrUXSrQ1AdkomxYz1GvCw">
                    <IoLogoYoutube />
                </a>
                <a href="http://fcodehcm.wordpress.com/">
                    <IoDocumentText />
                </a>
                <a href="/">
                    <IoLogoDiscord />
                </a>
            </Styled.SocialLinks>
        </Styled.Wrapper>
    );
};

Footer.propTypes = {};

export default Footer;
