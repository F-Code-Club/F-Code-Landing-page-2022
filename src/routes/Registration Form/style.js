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

export const SliderWrapper = styled.div`
    width: 750px;
    height: 550px;
    position: relative;
    padding: 0 20px;
    margin-left: 50px;
    border-radius: 10px;
    .slick-slide img {
        border-radius: 10px;
    }

    .slick-dots {
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        li {
            margin: 0 5px;
            button:before {
                font-size: 20px;
                color: #dff696;
                opacity: 1;
            }
            &.slick-active button:before {
                color: #92fa7a;
            }
        }
    }
`;

export const Slide = styled.div`
    border-radius: 10px;
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        object-fit: cover;
    }
`;
