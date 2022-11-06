import { Accordion, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAccordion = styled(Accordion)`
    background: transparent;
    box-shadow: none !important;
    // border-bottom: 1px solid #e5e7eb;
    padding: 16px 0;
    margin: 0;
`;
export const StyledTypography = styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #111928;
    ul {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        margin-left: 20px;
        font-size: 16px;
        line-height: 150%;
        color: #6b7280;
    }
    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #6b7280;
    }
`;
