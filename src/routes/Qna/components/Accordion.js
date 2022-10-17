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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                        .
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </StyledTypography>
                </AccordionDetails>
            </StyledAccordion>
        </Section>
    );
}
