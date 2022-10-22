import { Form } from 'formik';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

import px2vw from '../../utils/px2vw';

export const Section = styled.section`
    background-color: transparent;
    width: 100%;
    min-height: 100vh;
    @media (min-width: 1200px) {
        max-width: ${px2vw(1260)};
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled(Form)`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    ${down('md')} {
        max-width: 450px;
    }
    ${down('sm')} {
        max-width: 300px;
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;

    ${down('sm')} {
        margin: auto;

        button {
            height: 45px;
            width: inherit;
        }
    }
`;
