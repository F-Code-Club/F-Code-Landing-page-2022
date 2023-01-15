import { Container, EstablishPart, Box, RightPart, Direct } from '../styled';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function AboutUs() {
    return (
        <Container>
            <EstablishPart data-aos="fade-right">
                <Box>
                    <h2>2014</h2>
                    <h5>Established from</h5>
                </Box>
            </EstablishPart>
            <RightPart data-aos="fade-left">
                <h4>About Us</h4>
                <h1>F-Code Club</h1>
                <h3>
                    <span>F-Code</span>, established in 2014, is the first academic club of FPT
                    University at Ho Chi Minh City. With the initial aim of creating a community for
                    Software Engineering major’s students,
                    <strong> F-Code</strong> allows them to share and improve skills that are
                    neccesary for developers. After 5 years, <strong>F-Code</strong> has offered
                    various activites to students.
                </h3>
                <Direct>
                    <a href="https://www.facebook.com/fcodefpt/">
                        <h4>
                            F-Code Official Fanpage <ArrowForwardIcon />
                        </h4>
                    </a>
                    <a href="https://www.youtube.com/channel/UCZyrUXSrQ1AdkomxYz1GvCw/featured">
                        <h4>
                            F-Code Channel
                            <ArrowForwardIcon />
                        </h4>
                    </a>
                    <a href="http://fcodehcm.wordpress.com/">
                        <h4>
                            F-Code Blog
                            <ArrowForwardIcon />
                        </h4>
                    </a>
                </Direct>
            </RightPart>
        </Container>
    );
}

export default AboutUs;
