import { StyledAccordion, StyledTypography } from '../../SignUp/muiStyled';
import { Section } from '../styled';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export default function SimpleAccordion() {
    return (
        <Section>
            <StyledAccordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <StyledTypography>
                        What are the criteria for being a member of F-Code?
                    </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTypography>
                        <ul>
                            <li> Having respect for other members. </li>
                            <li> Self-studying and having problem-solving skill.</li>
                            <li> Working as a group. Being willing to share.</li>
                            <li> Being tenacious, creative and enthusiastic.</li>
                        </ul>
                    </StyledTypography>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <StyledTypography>
                        I’m currently learning other majors such as IA, AI, SA, SS,... Can I take
                        part in?
                    </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTypography>
                        <p>
                            F-Code is a community of students who share common IT habits and want to
                            share and learn. We encourage students to participate if your department
                            is Information Technology
                        </p>
                    </StyledTypography>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <StyledTypography>
                        My English skill is not good. Am I qualified to join F-Code?
                    </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTypography>
                        <p>
                            English is the key to unlocking new opportunities. The majority of good
                            IT materials are written in English. As a result, we recommend that you
                            try to improve your English skills in order to have access to more
                            information.
                        </p>
                    </StyledTypography>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <StyledTypography>
                        What will I receive when joining and are there any activities for me to
                        develop?
                    </StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTypography>
                        <p>
                            F-CODE is a good learning environment for students that are passionate
                            about technology. When you join this community, you have the option of
                            following the crew. We have four crew for members in our Club: BACKEND
                            CREW FRONT END CREW AI CREWnd and SECURITY CREW (Will emerge this year)
                        </p>
                    </StyledTypography>
                </AccordionDetails>
            </StyledAccordion>
        </Section>
    );
}
