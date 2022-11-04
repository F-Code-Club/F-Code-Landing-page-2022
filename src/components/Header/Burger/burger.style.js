import styled from 'styled-components';

export const StyledBurger = styled.div`
    width: 60px;
    height: 45px;
    position: relative;

    right: 100px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    transform-origin: right;
    transform: scale(0.5);
    z-index: 5;
    display: none;

    @media (max-width: 992px) {
        display: block;
        right: 50px;
        margin-bottom: -5px;
    }
    > span {
        display: block;
        position: absolute;
        height: 9px;
        width: 100%;
        background: rgb(0, 209, 125);
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 00.25s ease-in-out;
    }

    > span:nth-child(1) {
        transform-origin: left center;
        top: ${(props) => (props.open ? '-3px' : '0px')};
        transform: ${(props) => (props.open ? 'rotate(45deg)' : '')};
        left: ${(props) => (props.open ? '8px' : '0px')};
    }

    > span:nth-child(2) {
        top: 18px;
        transform-origin: left center;
        width: ${(props) => (props.open ? '0%' : '')};
        opacity: ${(props) => (props.open ? '0' : '')};
    }

    > span:nth-child(3) {
        transform-origin: left center;
        transform: ${(props) => (props.open ? 'rotate(-45deg)' : '')};
        top: ${(props) => (props.open ? '39px' : '36px')};
        left: ${(props) => (props.open ? '8px' : '')};
    }
`;
